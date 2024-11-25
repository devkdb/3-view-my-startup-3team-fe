import "./index.css";

function StartupList() {
  return (
    <table className="mainLayer">
      <tbody>
        <tr>
          <th className="rank">순위</th>
          <th className="name">기업 명</th>
          <th className="description">기업 소개</th>
          <th className="category">카테고리</th>
          <th className="selectCount">나의 기업 선택 횟수</th>
          <th className="compareCount">비교 기업 선택 횟수</th>
        </tr>
      </tbody>
    </table>
  );
}

export default StartupList;
