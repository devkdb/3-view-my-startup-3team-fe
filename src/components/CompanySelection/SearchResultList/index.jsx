import React from "react";
import Button from "../../Button/index";

const DEFAULT_IMAGE = "/images/default-company.png";

const SearchResultList = ({ results, selectedCompanies, onSelect }) => {
  // 결과 데이터가 비어 있는 경우 처리
  if (!results || results.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <ul>
      {results.map((company) => {
        const isSelected = selectedCompanies.some((c) => c.id === company.id);
        const categoryName = company.Category?.category || "카테고리 없음";

        return (
          <li key={company.id} className="company-item">
            <img
              src={company.image || DEFAULT_IMAGE}
              alt={company.name}
              width={48}
              className="company-logo"
            />
            <div className="company-info">
              <span className="company-name">{company.name}</span>
              <span className="company-tag">{categoryName}</span>{" "}
            </div>
            <Button
              variant={isSelected ? "complete" : "select"}
              onClick={() => onSelect(company)}
              disabled={isSelected}
            >
              {isSelected ? "선택완료" : "선택하기"}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResultList;
