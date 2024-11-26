import "../index.css";

function CompareDropdownList({ onItemClick, dropdownRef }) {
  // 리스트 항목들을 클릭하면 onItemClick 함수가 호출되어 선택된 값을 전달
  const dropdownRect = dropdownRef.current?.getBoundingClientRect();
  const listPosition = dropdownRect ? dropdownRect.bottom + window.scrollY : 0; // 드롭다운 박스 바로 아래에 리스트 위치
  return (
    <ul
      className="DropdownListLayer"
      style={{
        top: `${listPosition + 6}px`, // 동적으로 위치 설정
      }}
    >
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("actualInvestDesc", "누적 투자금액 높은순")}
      >
        누적 투자금액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("actualInvestAsc", "누적 투자금액 낮은순")}
      >
        누적 투자금액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("revenueDesc", "매출액 높은순")}
      >
        매출액 높은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("revenueAsc", "매출액 낮은순")}
      >
        매출액 낮은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("employeesDesc", "고용 인원 많은순")}
      >
        고용 인원 많은순
      </li>
      <li
        className="DropdownListFont"
        onClick={() => onItemClick("employeesAsc", "고용 인원 적은순")}
      >
        고용 인원 적은순
      </li>
    </ul>
  );
}

export default CompareDropdownList;
