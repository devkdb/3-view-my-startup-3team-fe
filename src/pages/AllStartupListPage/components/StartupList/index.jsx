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
            <th>누적 투자 금액</th>
            <th>매출액</th>
            <th>고용인원</th>
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
                <td>{startup.actualInvest}</td>
                <td>{startup.revenue}</td>
                <td>{startup.employees}</td>
              </tr>
            )
          })} */}
        </tbody>
      </table>
    </div>
  );
}

export default StartupList;