// npm install 해주세요.
import axios from 'axios';

const BASE_URL = 'https://three-view-my-startup-3team-be.onrender.com';

/**
 * 백엔드 api 라우터의 주석과 순서를 그대로 했습니다.
 * 참고해주세요
 */

// 전체 기업 목록 조회
async function getAllStartupsList(params = {}) {
  const res = await axios.get(`${BASE_URL}/api/startups`, {
    params,
  });
  return res.data;
}

// 전체 기업 검색 기능
async function getSearchStartupsList(params = {}) {
  const res = await axios.get(`${BASE_URL}/api/startups/search`, {
    params,
  });
  return res.data;
}

// 내 기업과 비교 대상 기업들 비교하기

// 특정 기업 상세 조회
async function getStartup(id) {
  const url = `${`${BASE_URL}/api/startups`}/${id}`;
  const res = await axios.get(url);
  return res.data;
}

// 내 기업의 순위와 근접한 순위의 기업 정보 확인
async function getStartupRank(id) {
  const url = `${`${BASE_URL}/api/startups`}/${id}/rank`;
  const res = await axios.get(url);
  return res.data;
}

// 기업 선택 횟수 조회
async function getSelectStartupsList(params = {}) {
  const res = await axios.get(`${BASE_URL}/api/selection`, {
    params,
  });
  return res.data;
}

// 나의 기업 선택하기

// 비교 기업 선택하기

// 전체 투자 현황 조회
async function getAllInvestments(params = {}) {
  const res = await axios.get(`${BASE_URL}/api/investments`, {
    params,
  });
  return res.data;
}

// 특정 기업에 투자하기
async function createInvestment(surveyData) {
  const res = await axios.post(`${BASE_URL}/api/investments`, surveyData);
  return res.data;
}

// 투자 수정
async function patchInvestment(id, surveyData) {
  const res = await axios.patch(
    `${BASE_URL}/api/investments/${id}`,
    surveyData,
  );
  return res.data
}

// 투자 삭제
async function deleteInvestment(id) {
  const url = await axios.delete(`${BASE_URL}/api/investments/${id}`);
  return url.data;
}

// Export
const AllstartupsService = {
  getAllStartupsList, getSearchStartupsList, getStartup, getStartupRank, getSelectStartupsList, getAllInvestments, createInvestment, patchInvestment, deleteInvestment
}

export { AllstartupsService as apiRouter };
