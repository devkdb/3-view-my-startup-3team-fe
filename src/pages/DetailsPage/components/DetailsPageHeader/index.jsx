import styles from "./index.module.css";
import noImageIcon from "../../../../assets/images/no-image.png";
import useFetchStartup from "../../../../hooks/useFetchCompanyDetail";
import Warn from "../../../../components/Warn/index";
import { useParams } from "react-router-dom";

/*
  동적인 경로 만듬
  <main.js>
	<Route path='details/:companyId' element={<DetailsPage />} />

  useParams 라는 훅으로 params 객체를 가져올 수 있다.
  <DetailsPageheader.jsx>
	import { useParams } from "react-router-dom";

  // useParams: 리턴하는 객체에는 현재 경로의 파라미터들이 저장됨.
  // 이 객체에 우리가 정의한 companyId 값도 저장되어 있다.
  const { companyId } = useParams();
  const { startup, error } = useFetchStartup(companyId);

 	<DetailsPageService.js>
	import mock from "mock.js";
  const { Startups, MockInvestors } = mock;

  export function getStartup(companyId) {
    return Startups.find((Startup) => Startup.id === companyId);
  }
*/

// const CATEGORIES = [
//   { id: 1, category: '에듀테크' },
//   { id: 2, category: '전자상거래' },
//   { id: 3, category: '솔루션' },
// ];

function DetailsPageheader() {
  const { companyId } = useParams();
  const { startup, error } = useFetchStartup(companyId);

  if (error) {
    return <Warn variant="error" title="오류발생" description={error} />;
  }

  if (!startup) {
    return;
  }

  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <img
          className={styles.logo}
          src={startup.image || noImageIcon}
          alt=" 로고"
        />
        <div className={styles.startup}>
          <h1>{startup.name}</h1>
          <h2>{startup.categoryName}</h2>
        </div>
      </div>
    </div>
  );
}
export default DetailsPageheader;
