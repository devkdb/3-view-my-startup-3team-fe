import "./index.css";


function StartupList({startups}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="startupRank">순위</th>
            <th className="startupCompareName">기업 명</th>
            <th className="startupIntro">기업 소개</th>
            <th className="startupCategory">카테고리</th>
            <th className="startupCount">나의 기업 선택 횟수</th>
            <th className="startupCompareCount">비교 기업 선택 횟수</th>
          </tr>
          {/* {startups.map((startup, index) => {
            return (
              <tr key={startup.id}>
                <td>{startup.rank}위</td>
                <td>
                  <img src={startup.image} alt="회사 로고 이미지"/>
                  {startup.name}
                </td>
                <td>{startup.description}</td>
                <td>{startup.category}</td>
                <td>{startup.count}</td>
                <td>{startup.comparisons}</td>
              </tr>
            )
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default StartupList;