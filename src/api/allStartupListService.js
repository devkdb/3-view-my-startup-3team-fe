// npm install 해주세요.
import axios from 'axios';

const BASE_URL = new URL('https://localhost:8001/api');

// GET Method
// 모든 스타트업 목록 조회
async function getAllStartupsList(params = {}) {
  const res = await axios.get(`${BASE_URL}/startups`, {
    params,
  });
  return res.data;
}

// 특정 스타트업 조회
async function getStartup(id) {
  const url = `${`${BASE_URL}/startups`}/${id}`;
  const res = await axios.get(url);
  return res.data;
}

// POST Method -  투자하기
async function createInvestment(surveyData) {
  const res = await axios.post(`${BASE_URL}/investments`, surveyData);
  return res.data;
}

// PATCH Method - 투자 수정
async function patchInvestment(id, surveyData) {
  const res = await axios.patch(
    `${BASE_URL}/investments/${id}`,
    surveyData,
  );
  return res.data
}

// DELETE Method - 투자 삭제
async function deleteInvestment(id) {
  const url = await axios.delete(`${BASE_URL}/investments/${id}`);
  return url.data;
}

// Export
const AllstartupsService = {
  getAllStartupsList, getStartup, createInvestment, patchInvestment, deleteInvestment
}

export default AllstartupsService;
