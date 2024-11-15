import "../index.css";

function CompareStatusDropdownList({ onItemClick, dropdownRef }) {
  // 리스트 항목들을 클릭하면 onItemClick 함수가 호출되어 선택된 값을 전달
  const dropdownRect = dropdownRef.current?.getBoundingClientRect();
  const listPosition = dropdownRect ? dropdownRect.bottom + window.scrollY : 0; // 드롭다운 박스 바로 아래에 리스트 위치
  return (
    <ul
      className="DropdownListLayerCompare"
      style={{
        top: `${listPosition + 6}px`, // 동적으로 위치 설정
      }}
    >
      <li
        className="DropdownListFontCompare"
        onClick={() => onItemClick("나의 기업 선택 횟수 높은순")}
      >
        나의 기업 선택 횟수 높은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() => onItemClick("나의 기업 선택 횟수 낮은순")}
      >
        나의 기업 선택 횟수 낮은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() => onItemClick("실제 누적 투자 금액 높은순")}
      >
        실제 누적 투자 금액 높은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() => onItemClick("실제 누적 투자 금액 낮은순")}
      >
        실제 누적 투자 금액 낮은순
      </li>
    </ul>
  );
}

export default CompareStatusDropdownList;
