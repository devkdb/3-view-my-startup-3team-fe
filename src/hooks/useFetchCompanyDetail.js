import { useEffect, useState } from "react";
import { getStartup } from "../api/DetailsPageService";

const useFetchStartup = (companyId) => {
  const [startup, setStartup] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const startupData = await getStartup(companyId);
        setStartup(startupData || {});
      } catch (e) {
        setError("스타트업 정보를 불러오는 데 실패하였습니다");
      }
    };

    if (companyId) {
      console.log(`fetchStartup 함수 실행. companyId:${companyId}`);
      fetchStartup();
    }
  }, [companyId]);

  return {
    startup,
    error,
  };
};

export default useFetchStartup;
