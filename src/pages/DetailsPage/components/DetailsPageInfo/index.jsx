import styles from "./index.module.css";
import { formatAmount } from "../../utils/formatAmount";
import useFetchStartup from "../../../../hooks/useFetchCompanyDetail";
import Warn from "../../../../components/Warn/index";
import { useParams } from "react-router-dom";

/*
innerHtml:
내용만 변경하거나 접근할때 사용.
선택한 요소의 자식 요소 및 텍스트 포함
해당 태그는 포함 안됨. 자식만.

기업소개(description)의 내용을 그대로
html tag로 저장하고, 저장된 html tag를
그대로 화면에 표시.

React에서 innerHtml를 표시하기 위해
dangerouslySetInnerHTML 사용.

string 형태의 html을 렌더링하기 newLine(\n)을 br 태그로 변환.

방법 1.
dangerouslySetInnerHTML={{                
  __html: startup.description.replace(/\n/g, "<br />"),
}}

방법 2.
{startup.description.split("\n").map((line) => {
  return (
    <span>
      {line}
      <br />
    </span>
  );
})}
*/

function DetailspageInfo() {
  console.log("DetailsPageInfo");

  const { startupId } = useParams();
  const { startup, error } = useFetchStartup(startupId);

  if (error) {
    return <Warn variant='error' title='오류발생' description={error} />;
  }

  if (!startup) {
    return null;
  }

  return (
    <>
      <div className={styles.body}>
        <div className={styles.infos}>
          <div className={styles.info}>
            <p>누적 투자 금액</p>
            <h1>{formatAmount(startup.actualInvest)} 원</h1>
          </div>
          <div className={styles.info}>
            <p>매출액</p>
            <h1>{formatAmount(startup.revenue)} 원</h1>
          </div>
          <div className={styles.info}>
            <p>고용 인원</p>
            <h1>{formatAmount(startup.employees)}명</h1>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h1>기업 소개</h1>
            <p>
              {startup.description.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailspageInfo;
