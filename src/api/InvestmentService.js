import mock from "./mocks/kdb.json";
const { startups, mockinvestors } = mock;

const API_BASE_URL = "https://viewmystatup-db.onrender.com/api";

// investment /api/investments GET 전체 투자 현황 조회 (정렬, 페이지네이션)

// investment /api/investments POST 특정 기업에 투자하기
export async function addInvestment(investData) {
    try{
        const response = await fetch(`${API_BASE_URL}/investments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(investData),
        });
        if (!response.ok){
            throw new Error('HTTP error: ${response.status}');
        }
        const result = await response.json();
        return result;
    }catch (error){
        console.log("투자 실패:", error);
        throw error;
    }
}

// investment /api/investments/{investmentId} PUT 투자 수정

// investment /api/investments/{investmentId} DELETE 투자 삭제
