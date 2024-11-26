import React, { useState } from "react";
import InputInactive from "../../components/InputFieldInactive";
import InputActive from "../../components/InputFieldActive";
import "../ComparePage/index.css";
import btnPlusIcon from "../../assets/images/icons/btn_plus.png";
import Button from "../../components/Button";
import ChoosingMyEnterprise from "../../components/ChoosingMyEnterprise";
import CompanySelection from "../../components/CompanySelection";

const DEFAULT_IMAGE = "/images/default-company.png"; // 기본 이미지 경로

const ComparePage = () => {
  const [showChoosingModal, setShowChoosingModal] = useState(false); // ChoosingMyEnterprise 모달 상태
  const [showSelectionModal, setShowSelectionModal] = useState(false); // CompanySelection 모달 상태
  const [selectedCompanies, setSelectedCompanies] = useState([]); // 선택된 기업 리스트
  const [selectedBaseCompany, setSelectedBaseCompany] = useState(null); // 기준 기업 추가

  // ChoosingMyEnterprise 모달 열기/닫기
  const toggleChoosingModal = () => setShowChoosingModal(!showChoosingModal);

  // CompanySelection 모달 열기/닫기
  const toggleSelectionModal = () => setShowSelectionModal(!showSelectionModal);

  // 기업 제거 핸들러
  const handleRemoveCompany = (companyId) => {
    setSelectedCompanies(
      selectedCompanies.filter((company) => company.id !== companyId)
    ); // 기업 제거
  };

  // 기업 추가 핸들러 (ChoosingMyEnterprise용)
  const handleAddCompanySingle = (company) => {
    const companyWithDefaults = {
      ...company,
      logo: company.logo || DEFAULT_IMAGE,
      Category: company.Category || { category: "카테고리 없음" },
      name: company.name || "기업 이름 없음",
    };
    setSelectedBaseCompany(companyWithDefaults); // 기준 기업은 항상 단일 기업만 선택 가능
    setSelectedCompanies([]); // 다른 기업들이 추가되지 않도록
    setShowChoosingModal(false); // ChoosingMyEnterprise 모달 닫기
  };

  // 기업 추가 핸들러 (CompanySelection용)
  const handleAddCompanyMultiple = (company) => {
    if (
      selectedCompanies.length < 5 &&
      !selectedCompanies.some((c) => c.id === company.id) &&
      selectedBaseCompany?.id !== company.id
    ) {
      const companyWithDefaults = {
        ...company,
        logo: company.image || DEFAULT_IMAGE, // 'image' 필드를 사용
        Category: company.Category || { category: "카테고리 없음" },
        name: company.name || "기업 이름 없음",
      };
      setSelectedCompanies((prevCompanies) => [
        ...prevCompanies,
        companyWithDefaults,
      ]);
    }
  };

  // 전체 초기화 핸들러 (기준기업과 비교기업 모두 초기화)
  const handleResetAllCompanies = () => {
    setSelectedCompanies([]); // 비교기업 초기화
    setSelectedBaseCompany(null); // 기준기업 초기화
  };

  return (
    <div className="compare-page">
      <div className="choose-My-Enterprise">
        <h1>나의 기업을 선택해주세요!</h1>

        {/* 비교기업이 하나라도 추가되었을 때만 "전체 초기화" 버튼이 보이도록 함 */}
        {selectedCompanies.length > 0 && (
          <Button
            className="reset-btn"
            variant="medium"
            onClick={handleResetAllCompanies}
          >
            전체 초기화
          </Button>
        )}
      </div>

      {/* 상단 선택된 기업 목록 렌더링 */}
      {selectedBaseCompany && (
        <InputActive key={selectedBaseCompany.id}>
          <p
            className="remove-company-button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedBaseCompany(null); // 기준 기업 선택 취소
            }}
          >
            선택 취소
          </p>
          <div className="selected-company1">
            <img
              src={selectedBaseCompany.logo}
              alt={selectedBaseCompany.name}
              className="selected-company-logo"
              onError={(e) => {
                e.target.src = DEFAULT_IMAGE;
              }}
            />
            <div className="company-details">
              <p className="company-name">{selectedBaseCompany.name}</p>
              <span className="company-category">
                {selectedBaseCompany.Category?.category || "카테고리 없음"}
              </span>
            </div>
          </div>
        </InputActive>
      )}

      {/* 하단 텍스트 및 "기업 추가하기" 버튼 */}
      {selectedBaseCompany && (
        <div className="choose-My-Enterprise2">
          <h1>
            어떤 기업이 궁금하세요?
            {/* 선택된 기업이 하나라도 있으면 "최대 5개" 텍스트 추가 */}
            {selectedCompanies.length > 0 && <span> (최대 5개)</span>}
          </h1>
          <Button
            variant="default"
            onClick={toggleSelectionModal}
            disabled={selectedCompanies.length === 5}
            className={`plus-company-btn ${
              selectedCompanies.length === 5 ? "disabled" : ""
            }`}
          >
            기업 추가하기
          </Button>
        </div>
      )}

      {/* 선택된 기업이 없을 때 "기업 추가" 버튼 표시 */}
      {!selectedBaseCompany && (
        <InputInactive onClick={toggleChoosingModal}>
          <div className="btn-plus-container">
            <img
              src={btnPlusIcon}
              alt="기업 추가 버튼"
              className="btn-plus-icon"
            />
            <p>기업 추가</p>
          </div>
        </InputInactive>
      )}

      {/* 하단에 추가된 기업 리스트 (기준 기업이 선택된 후에만 보이게 설정) */}
      {selectedBaseCompany && (
        <InputActive>
          {selectedCompanies.length === 0 && (
            <div className="add-company-placeholder">
              <p>
                아직 추가한 기업이 없어요,
                <br />
                버튼을 눌러 기업을 추가해보세요!
              </p>
            </div>
          )}

          <div className="selected-companies-list">
            {/* 기준 기업 제외하고 최대 5개 기업만 하단에 표시 */}
            {selectedCompanies.map((company) => (
              <div key={company.id} className="selected-companys">
                <span
                  className="remove-company-button2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveCompany(company.id); // 선택 해제
                  }}
                >
                  ー
                </span>
                <img
                  src={company.logo}
                  alt={company.name}
                  className="selected-company-logo"
                  onError={(e) => {
                    e.target.src = DEFAULT_IMAGE;
                  }}
                />
                <div className="company-details">
                  <p className="company-name">{company.name}</p>
                  <span className="company-category">
                    {company.Category?.category || "카테고리 없음"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </InputActive>
      )}

      <div className="compare-button-container">
        <Button
          variant="default"
          className={`compare-btn ${
            selectedCompanies.length > 0 ? "active" : "disabled"
          }`}
          disabled={selectedCompanies.length === 0}
        >
          기업 비교하기
        </Button>
      </div>

      {/* ChoosingMyEnterprise 모달 */}
      {showChoosingModal && (
        <div className="modal-overlay" onClick={toggleChoosingModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <ChoosingMyEnterprise
              onAddCompany={handleAddCompanySingle}
              selectedCompanies={selectedCompanies}
            />
          </div>
        </div>
      )}

      {/* CompanySelection 모달 */}
      {showSelectionModal && (
        <div className="modal-overlay" onClick={toggleSelectionModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <CompanySelection
              selectedCompanies={selectedCompanies}
              onAddCompanies={handleAddCompanyMultiple} // 기업 추가 핸들러
              onRemoveCompany={handleRemoveCompany} // 기업 제거 핸들러
              selectedBaseCompany={selectedBaseCompany} // 기준 기업 전달
              onClose={toggleSelectionModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
