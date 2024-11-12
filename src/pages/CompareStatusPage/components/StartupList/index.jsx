import "./index.css";


function StartupList({startups}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>순위</th>
            <th>기업 명</th>
            <th>기업 소개</th>
            <th>카테고리</th>
            <th>나의 기업 선택 횟수</th>
            <th>비교 기업 선택 횟수</th>
          </tr>
          {/* {startups.map((startup, index) => {
            return (
              <tr key={startup.id}>
                <td>{startup.rank}위</td>
                <td>
                  <img src={startup.image} alt="회사 로고 이미지"/>
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