import styles from "./index.module.css";
import noImageIcon from "../../../../assets/images/no-image.png";
import useFetchStartup from "../../../../hooks/useFetchCompanyDetail";
import Warn from "../../../../components/Warn/index";
import { useParams } from "react-router-dom";

/*
  동적인 경로 만듬
  <main.js>
	<Route path='details/:startupId' element={<DetailsPage />} />

  useParams 라는 훅으로 params 객체를 가져올 수 있다.
  <DetailsPageheader.jsx>
	import { useParams } from "react-router-dom";

  // useParams: 리턴하는 객체에는 현재 경로의 파라미터들이 저장됨.
  // 이 객체에 우리가 정의한 startupId 값도 저장되어 있다.
  const { startupId } = useParams();
  const { startup, error } = useFetchStartup(startupId);

 	<DetailsPageService.js>
	import mock from "mock.js";
  const { Startups, MockInvestors } = mock;

  export function getStartup(startupId) {
    return Startups.find((Startup) => Startup.id === startupId);

  App.js에서 path='details/:startupId'로 정의했기 때문에, 
  DetailsPage에서는 startupId라는 이름으로 파라미터를 받아야 한다.
  AllStartupListPage에서 링크를 생성할 때 사용하는 경로는 /Details/${item.id}이지만, 
  이 링크의 목적은 startupId를 전달하는 것이다.
  따라서, AllStartupListPage에서 item.id를 startupId로 사용하여 DetailsPage로 전달하는 것이 
  올바른 접근 방식이다.
  }
*/

// 카테고리 번호에 따른 이름 HTTP 화면에 보여준다.
const CATEGORIES = [
  { id: 1, category: "에듀테크" },
  { id: 2, category: "전자상거래" },
  { id: 3, category: "솔루션" },
  { id: 4, category: "기계장비" },
];

function DetailsPageheader() {
  const { startupId } = useParams();
  const { startup, error } = useFetchStartup(startupId);

  if (error) {
    return <Warn variant='error' title='오류발생' description={error} />;
  }

  if (!startup) {
    return null; // 스타트업 데이터가 없을 경우 null 반환
  }

  // startup.id에 맞는 카테고리 이름 찾기
  const category = CATEGORIES.find((cat) => cat.id === startup.categoryId);
  const categoryName = category ? category.category : "알수없음"; // 카테고리가 없을 경우 기본값 설정
  console.log(
    `startup.categoryId:${startup.categoryId}, cacategory:${category}, categoryName:${categoryName}`
  );

  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <img
          className={styles.logo}
          src={startup.image || noImageIcon}
          alt=' 로고'
        />
        <div className={styles.startup}>
          <h1>{startup.name}</h1>
          <h2>{categoryName}</h2>
        </div>
      </div>
    </div>
  );
}
export default DetailsPageheader;
