import React from "react";
import Button from "../../Button/index";

const SelectedList = ({ selected, onRemove }) => {
  return (
    <ul>
      {selected.map((company) => {
        const categoryName = company.Category?.category || "카테고리 없음";

        return (
          <li key={company.id} className="selected-item">
            <div className="selected-info">
              <img src={company.image} alt={company.name} width={48} />
              <span className="company-name">{company.name}</span>
              <span className="company-tag">{categoryName}</span>{" "}
            </div>
            <Button variant="cancel" onClick={() => onRemove(company.id)}>
              선택 해제
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectedList;
