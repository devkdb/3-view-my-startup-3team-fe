import mock from "./mocks/kdb.json";
const { startups, mockinvestors } = mock;

const API_BASE_URL = "http://localhost:8000";

// company /api/startups/{companyId} GET 특정 기업 상세 조회

// Mock 데이터 사용할때
// export async function getStartup(companyId) {
//   console.log(`getStartup 함수 실행. companyId:${companyId}`);
//   return startups.find((startup) => startup.id === Number(companyId));
// }

export async function getStartup(companyId) {
  try {
    const response = await fetch(`${API_BASE_URL}/startups/${companyId}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      console.log("errMessage", errorMessage);
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getInvestors(
  companyId,
  page = 1,
  limit = 5,
  order = "investAmount",
  sort = "desc"
) {
  return mockinvestors.filter(
    (mockinvestor) => mockinvestor.startupId === Number(100)
  );
  // .limit(5); TODO: 5개 제한 구현할것. 여기가 아니더라도. 현재 제한 없음
}
