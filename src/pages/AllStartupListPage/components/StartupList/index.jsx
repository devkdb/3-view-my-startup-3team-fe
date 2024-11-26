import "./index.css";


function StartupList({startups}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="startupRank hide">순위</th>
            <th className="allStartupName">기업 명</th>
            <th className="allStartupIntro">기업 소개</th>
            <th className="allStartupCategory">카테고리</th>
            <th className="allStartupInvest">누적 투자 금액</th>
            <th className="allStartupRevenue">매출액</th>
            <th className="allStartupEmployee">고용인원</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StartupList;