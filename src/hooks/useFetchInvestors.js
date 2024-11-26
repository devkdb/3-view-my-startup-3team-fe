import { useEffect, useState } from "react";
import { apiRouter } from "../api/allApiService.js";

/*
이 훅은 특정 기업의 투자자 정보를 가져오기 위해 getInvestors 함수를 호출한다.
useEffect를 사용하여 의존성 배열에 있는 값이 변경될 때마다 데이터를 가져온다.
상태 관리에 useState를 사용하여 투자자 리스트, 에러 메시지, 총 투자자 수를 관리한다.
*/
const useFetchInvestors = (companyId, currentPage, maxItems = 5) => {
  const [investors, setInvestors] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const [showLoading, setShowLoading] = useState(false); // 로딩 화면을 표시할지 여부
  const MIN_LOADING_TIME = 2000; // 최소 로딩 시간, 로딩 화면이 짧게 깜빡이는 것을 방지

  useEffect(() => {
    const fetchInvestors = async () => {
      const loadingTimer = setTimeout(() => {
        setShowLoading(true); // 최소 로딩시간이 지나면 로딩 화면 표시
      }, MIN_LOADING_TIME);

      try {
        const investorList = await apiRouter.getInvestors(
          companyId,
          currentPage,
          maxItems
        );

        setInvestors(investorList.investors || []);
        setTotalCount(investorList.totalInvestors || 0);
      } catch (e) {
        setError(
          e.response?.data?.error ||
            "투자자 리스트를 불러오는 데 실패하였습니다"
        );
      } finally {
        clearTimeout(loadingTimer);
        setShowLoading(false);
      }
    };

    console.log(
      `fetchInvestors 함수 실행. companyId:${companyId}, currentPage:${currentPage}, maxItems:${maxItems}`
    );

    fetchInvestors();
  }, [companyId, currentPage, maxItems]);

  return {
    investors,
    error,
    totalCount,
    showLoading,
  };
};

export default useFetchInvestors;
