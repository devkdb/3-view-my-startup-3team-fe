import "./index.css";


function StartupList({startups}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="startupRank hide">순위</th>
            <th className="startupName">기업 명</th>
            <th className="startupIntro">기업 소개</th>
            <th className="allStartupCategory">카테고리</th>
            <th className="startupInvest">누적 투자 금액</th>
            <th className="startupRevenue">매출액</th>
            <th className="startupEmployee">고용인원</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StartupList;