import { useRef, useState } from "react";
import toggle from "../../../../assets/images/icons/ic_toggle.png";
import "./index.css";
import CompareStatusDropdownList from "./List/index";

function CompareStatusDropdown({ onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] =
    useState("나의 기업 선택 횟수 높은순");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (value, label) => {
    setSelectedValue(label);
    setIsOpen(false);
    onItemClick(value);
  };

  return (
    <div className="DropdownBodyCompare">
      <button
        onClick={toggleDropdown}
        className="DropdownLayerCompare"
        ref={dropdownRef}
      >
        {selectedValue}
        <img src={toggle} alt="toggle버튼" />
      </button>
      {isOpen && (
        <CompareStatusDropdownList
          onItemClick={handleItemClick}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
}

export default CompareStatusDropdown;
