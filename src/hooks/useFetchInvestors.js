import { useEffect, useState } from "react";
import { getInvestors } from "../api/DetailsPageService";

const useFetchInvestors = (companyId, currentPage, maxItems = 5) => {
  const [investors, setInvestors] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const investorList = await getInvestors(
          companyId,
          currentPage,
          maxItems
        );

        setInvestors(investorList || []);
        setTotalCount(investorList.totalCount || 0);
      } catch (e) {
        setError("기업투자 리스트를 불러오는 데 실패하였습니다");
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
  };
};

export default useFetchInvestors;
