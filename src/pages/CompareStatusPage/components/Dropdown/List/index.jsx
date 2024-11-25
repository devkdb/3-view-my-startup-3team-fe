import React from "react";
import "../index.css";

function CompareStatusDropdownList({ onItemClick, dropdownRef }) {
  const dropdownRect = dropdownRef.current?.getBoundingClientRect();
  const listPosition = dropdownRect ? dropdownRect.bottom + window.scrollY : 0;

  return (
    <ul
      className="DropdownListLayerCompare"
      style={{
        top: `${listPosition + 6}px`,
      }}
    >
      <li
        className="DropdownListFontCompare"
        onClick={() =>
          onItemClick("selectCountDesc", "나의 기업 선택 횟수 높은순")
        }
      >
        나의 기업 선택 횟수 높은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() =>
          onItemClick("selectCountAsc", "나의 기업 선택 횟수 낮은순")
        }
      >
        나의 기업 선택 횟수 낮은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() =>
          onItemClick("actualInvestDesc", "실제 누적 투자 금액 높은순")
        }
      >
        실제 누적 투자 금액 높은순
      </li>
      <li
        className="DropdownListFontCompare"
        onClick={() =>
          onItemClick("actualInvestAsc", "실제 누적 투자 금액 낮은순")
        }
      >
        실제 누적 투자 금액 낮은순
      </li>
    </ul>
  );
}

export default CompareStatusDropdownList;
