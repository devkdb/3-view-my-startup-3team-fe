import "./index.css";


function StartupList({startups}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="startupRank">순위</th>
            <th className="startupName">기업 명</th>
            <th className="startupIntro">기업 소개</th>
            <th className="startupCategory">카테고리</th>
            <th className="startupAmount">View My Startup 투자 금액</th>
            <th className="startupTotalInvest">실제 누적 투자 금액</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StartupList;