import "../index.css";

function CompareDropdownList({ onItemClick }) {
  // 리스트 항목들을 클릭하면 onItemClick 함수가 호출되어 선택된 값을 전달
  return (
    <ul className="DropdownListLayer">
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("누적 투자금액 높은순")}
      >
        누적 투자금액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("누적 투자금액 낮은순")}
      >
        누적 투자금액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("매출액 높은순")}
      >
        매출액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("매출액 낮은순")}
      >
        매출액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("고용 인원 많은순")}
      >
        고용 인원 많은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("고용 인원 적은순")}
      >
        고용 인원 적은순
      </li>
    </ul>
  );
}

export default CompareDropdownList;
