import { useState } from "react";
import toggle from "./ic_toggle.png"; //경로에 맞춰서 수정
import "./index.css";
import CompareDropdownList from "./List/index";

function CompareDropdown() {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열기/닫기 상태
  const [selectedValue, setSelectedValue] = useState("누적 투자금액 높은순"); // 선택된 항목의 기본 값 설정
  // 드롭다운을 열고 닫는 함수
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  // 리스트 항목을 클릭했을 때 호출되는 함수
  const handleItemClick = (value) => {
    setSelectedValue(value); // 선택된 항목을 상태로 업데이트
    setIsOpen(false); // 클릭 후 드롭다운 닫기
  };
  return (
    <div>
      <button onClick={toggleDropdown} className="DropdownLayer">
        {selectedValue}
        <img src={toggle} alt="toggle버튼" />
      </button>
      {/* 드롭다운이 열리면 리스트 항목을 표시 */}
      {isOpen && <CompareDropdownList onItemClick={handleItemClick} />}
    </div>
  );
}

export default CompareDropdown;
