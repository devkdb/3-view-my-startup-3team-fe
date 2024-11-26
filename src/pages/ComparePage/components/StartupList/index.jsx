import "./index.css";

export function CompareStartupList() {
  return (
    <table className="mainLayer">
      <tbody>
        <tr>
          <th className="name">기업 명</th>
          <th className="description">기업 소개</th>
          <th className="category">카테고리</th>
          <th className="actualInvest">누적 투자 금액</th>
          <th className="revenue">매출액</th>
          <th className="employees">고용 인원</th>
        </tr>
      </tbody>
    </table>
  );
}

export function CompareStartupRankCheck() {
  return (
    <table className="mainLayer">
      <tbody>
        <tr>
          <th className="check-rank">순위</th>
          <th className="check-name">기업 명</th>
          <th className="check-description">기업 소개</th>
          <th className="check-category">카테고리</th>
          <th className="check-actualInvest">누적 투자 금액</th>
          <th className="check-revenue">매출액</th>
          <th className="check-employees">고용 인원</th>
        </tr>
      </tbody>
    </table>
  );
}
