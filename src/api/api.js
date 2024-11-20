// import axios from "axios";

// const instance = axios.create({
//   // baseURL: 'https://3-view-my-startup-3team-fe.com'
//   baseURL: "http://localhost:8000/",
// });

// 기업 전체 조회
// company /startups GET
// test -> http://localhost:3002/startups

// 내 기업과 비교 대상 기벙들 비교하기 (정렬)
// company /startups/comparison GET

//특정 기업 상세 조회
// company /startups/{companyId} GET
// test -> http://localhost:3002/startups/10

// 내 기업의 순위와 근접한 순위의 기업 정보 확인
// company /startups/{companyId}/rank GET

//기업 선택 횟수 조회
// selections /selections GET
// test -> http://localhost:3002/selections

// 전체 투자 현황 조회 (정렬, 페이지네이션)
// investment /investments GET

// 특정 기업에 투자하기
// investment /investments POST

//  투자 수정
// investment /investments/{investmentId} PUT

//  투자 삭제
// investment /investments/{investmentId} DELETE