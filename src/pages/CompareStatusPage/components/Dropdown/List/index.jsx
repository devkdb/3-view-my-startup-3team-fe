import "../index.css";

function CompareStatusDropdownList({ onItemClick }) {
  // 리스트 항목들을 클릭하면 onItemClick 함수가 호출되어 선택된 값을 전달
  return (
    <ul className="DropdownListLayer">
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("나의 기업 선택 횟수 높은순")}
      >
        나의 기업 선택 횟수 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("나의 기업 선택 횟수 낮은순")}
      >
        나의 기업 선택 횟수 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("실제 누적 투자 금액 높은순")}
      >
        실제 누적 투자 금액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("실제 누적 투자 금액 낮은순")}
      >
        실제 누적 투자 금액 낮은순
      </li>
    </ul>
  );
}

export default CompareStatusDropdownList;
