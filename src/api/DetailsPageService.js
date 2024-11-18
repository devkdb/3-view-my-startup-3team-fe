import mock from "./mocks/kdb.json";
const { startups, mockinvestors } = mock;

/*
{
"id":1,
"name":"코드잇",
"actualInvest":"14000000000",
"simInvest":"6225300000",
"revenue":"1200000000",
"employees":500,
"description":"코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다.\n\n코딩 교육과 데이터 사이언스 교육에 대한 수요는 급격히 늘어나고 있지만, 아직까지 좋은 교육 서비스를 찾기란 쉽지 않습니다. 이를 해결하고자 코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 동시에 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다.\n\n모든 강의를 마음껏 들을 수 있는 \"코드잇 무제한 멤버십\"을 제공하고 있으며, 지난 5년 동안 21만 명의 수강생과 평균만족도 4.9점이라는 국내 교육 업계에서 보기 드문 성과를 달성하였습니다. 또한 콘텐츠와 기술력을 인정받아 2021년 10월 Series B 투자를 받아 누적 140억 원 투자를 받았고, 현재 40여 명의 팀원이 같은 목표를 향해 나아가고 있습니다.\n\n\"배움의 기쁨을 세상 모두에게.\"\n\n이것이 코드잇의 비전입니다. 현재는 최고의 코딩 교육 서비스를 국내에서 제공하고 있지만, 이보다 더 큰 그림을 그리고 있습니다. 2021년 상반기부터 영어권 시장 진출을 시작했고, 코딩과 인접한 분야부터 스펙트럼을 넓혀 나갈 계획입니다.",
"count":13,
"image":"/images/logo_codeit.png",
"categoryId":1
}
*/
// company /api/companies/{companyId} GET 특정 기업 상세 조회
export async function getStartup(companyId) {
  console.log(`getStartup 함수 실행. companyId:${companyId}`);
  return startups.find((startup) => startup.id === Number(companyId));
}

/*
{"id":10,
"name":"박준호",
"investAmount":"1000000000",
"comment":"빠른 성장이 예상됩니다.",
"password":"pw1234",
"startupId":1}
*/
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
