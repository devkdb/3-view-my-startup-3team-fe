import { useRef, useState } from "react";
import toggle from "../../../../assets/images/icons/ic_toggle.png";
import "./index.css";
import AllStartupDropdownList from "./List/index";

function AllStartupDropdown({
  setOrderBy,
}) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열기/닫기 상태
  const [selectedValue, setSelectedValue] = useState("누적 투자금액 높은순"); // 선택된 항목의 기본 값 설정
  const dropdownRef = useRef(null); // 드롭다운 박스의 ref
  // 드롭다운을 열고 닫는 함수
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // 리스트 항목을 클릭했을 때 호출되는 함수
  const handleItemClick = (valueKo, order) => {
    setOrderBy(order);
    setSelectedValue(valueKo); // 선택된 항목을 상태로 업데이트
    setIsOpen(false); // 클릭 후 드롭다운 닫기
  };
  return (
    <div className="DropdownBodyStartup">
      <button
        onClick={toggleDropdown}
        className="DropdownLayerStartup"
        ref={dropdownRef}
      >
        {selectedValue}
        <img src={toggle} alt="toggle버튼" />
      </button>
      {isOpen && (
        <AllStartupDropdownList
          onItemClick={handleItemClick}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
}

export default AllStartupDropdown;
