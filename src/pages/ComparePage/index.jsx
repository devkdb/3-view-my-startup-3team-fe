import React, { useState } from "react";
import InputInactive from "../../components/InputFieldInactive";
import InputActive from "../../components/InputFieldActive";
import "../ComparePage/index.css";
import btnPlusIcon from "../../assets/images/icons/btn_plus.png";
import Button from "../../components/Button";
import ChoosingMyEnterprise from "../../components/ChoosingMyEnterprise";
import CompanySelection from "../../components/CompanySelection";
import ResultsCheck from "./components/ResultsCheck";
import RankCheck from "./components/RankCheck";
import CreateMyStartupInvestment from "../CompareStatusPage/components/CreateMyStartupInvestment/index";

const DEFAULT_IMAGE = "/images/default-company.png";

const ComparePage = () => {
  const [showChoosingModal, setShowChoosingModal] = useState(false);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedBaseCompany, setSelectedBaseCompany] = useState(null);
  const [showResults, setShowResults] = useState(false);

  //const [selectedStartup, setSelectedStartup] = useState([]);
  const [isInvestModal, setIsInvestModal] = useState(false);
  const handleOpenInvestModal = () => {
    setIsInvestModal(true);
  };
  const handleCloseInvestModal = (e) => {
    if (e) e.preventDefault();
    setIsInvestModal(false);
  };

  const toggleChoosingModal = () => setShowChoosingModal(!showChoosingModal);
  const toggleSelectionModal = () => setShowSelectionModal(!showSelectionModal);

  const handleCompareClick = () => {
    if (selectedCompanies.length > 0) {
      setShowResults(true);
    }
  };

  const handleRemoveCompany = (companyId) => {
    setSelectedCompanies(
      selectedCompanies.filter((company) => company.id !== companyId)
    );
  };

  const handleAddCompanySingle = (company) => {
    const companyWithDefaults = {
      ...company,
      logo: company.logo || DEFAULT_IMAGE,
      Category: company.Category || { category: "카테고리 없음" },
      name: company.name || "기업 이름 없음",
    };
    setSelectedBaseCompany(companyWithDefaults);
    setSelectedCompanies([]);
    setShowChoosingModal(false);
  };

  const handleAddCompanyMultiple = (company) => {
    if (
      selectedCompanies.length < 5 &&
      !selectedCompanies.some((c) => c.id === company.id) &&
      selectedBaseCompany?.id !== company.id
    ) {
      const companyWithDefaults = {
        ...company,
        logo: company.image || DEFAULT_IMAGE,
        Category: company.Category || { category: "카테고리 없음" },
        name: company.name || "기업 이름 없음",
      };
      setSelectedCompanies((prevCompanies) => [
        ...prevCompanies,
        companyWithDefaults,
      ]);
    }
  };

  const handleResetAllCompanies = () => {
    setSelectedCompanies([]);
    setSelectedBaseCompany(null);
    setShowResults(false);
  };

  return (
    <div className='compare-page'>
      <div className='choose-My-Enterprise'>
        <h1>나의 기업을 선택해주세요!</h1>

        {selectedCompanies.length > 0 && (
          <Button
            className='reset-btn'
            variant='medium'
            onClick={handleResetAllCompanies}
          >
            전체 초기화
          </Button>
        )}
      </div>

      {selectedBaseCompany && (
        <InputActive key={selectedBaseCompany.id}>
          <p
            className='remove-company-button'
            onClick={(e) => {
              e.stopPropagation();
              setSelectedBaseCompany(null);
            }}
          >
            선택 취소
          </p>
          <div className='selected-company1'>
            <img
              src={selectedBaseCompany.logo}
              alt={selectedBaseCompany.name}
              className='selected-company-logo'
              onError={(e) => {
                e.target.src = DEFAULT_IMAGE;
              }}
            />
            <div className='company-details'>
              <p className='company-name'>{selectedBaseCompany.name}</p>
              <span className='company-category'>
                {selectedBaseCompany.Category?.category || "카테고리 없음"}
              </span>
            </div>
          </div>
        </InputActive>
      )}

      {selectedBaseCompany && !showResults && (
        <div className='choose-My-Enterprise2'>
          <h1>
            어떤 기업이 궁금하세요?
            {selectedCompanies.length > 0 && <span> (최대 5개)</span>}
          </h1>
          <Button
            variant='default'
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

      {!selectedBaseCompany && !showResults && (
        <InputInactive onClick={toggleChoosingModal}>
          <div className='btn-plus-container'>
            <img
              src={btnPlusIcon}
              alt='기업 추가 버튼'
              className='btn-plus-icon'
            />
            <p>기업 추가</p>
          </div>
        </InputInactive>
      )}

      {selectedBaseCompany && !showResults && (
        <InputActive>
          {selectedCompanies.length === 0 && (
            <div className='add-company-placeholder'>
              <p>
                아직 추가한 기업이 없어요,
                <br />
                버튼을 눌러 기업을 추가해보세요!
              </p>
            </div>
          )}

          <div className='selected-companies-list'>
            {selectedCompanies.map((company) => (
              <div key={company.id} className='selected-companys'>
                <span
                  className='remove-company-button2'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveCompany(company.id);
                  }}
                >
                  ー
                </span>
                <img
                  src={company.logo}
                  alt={company.name}
                  className='selected-company-logo'
                  onError={(e) => {
                    e.target.src = DEFAULT_IMAGE;
                  }}
                />
                <div className='company-details'>
                  <p className='company-name'>{company.name}</p>
                  <span className='company-category'>
                    {company.Category?.category || "카테고리 없음"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </InputActive>
      )}

      {!showResults && (
        <div className='compare-button-container'>
          <Button
            variant='default'
            className={`compare-btn ${
              selectedCompanies.length > 0 ? "active" : "disabled"
            }`}
            disabled={selectedCompanies.length === 0}
            onClick={handleCompareClick}
          >
            기업 비교하기
          </Button>
        </div>
      )}

      {showChoosingModal && (
        <div className='modal-overlay' onClick={toggleChoosingModal}>
          <div className='modal-container' onClick={(e) => e.stopPropagation()}>
            <ChoosingMyEnterprise
              onAddCompany={handleAddCompanySingle}
              selectedCompanies={selectedCompanies}
            />
          </div>
        </div>
      )}

      {showSelectionModal && (
        <div className='modal-overlay' onClick={toggleSelectionModal}>
          <div className='modal-container' onClick={(e) => e.stopPropagation()}>
            <CompanySelection
              selectedCompanies={selectedCompanies}
              onAddCompanies={handleAddCompanyMultiple}
              onRemoveCompany={handleRemoveCompany}
              selectedBaseCompany={selectedBaseCompany}
              onClose={toggleSelectionModal}
            />
          </div>
        </div>
      )}

      {showResults && (
        <>
          <ResultsCheck
            selectedCompanies={selectedCompanies}
            selectedBaseCompany={selectedBaseCompany}
          />
          <RankCheck
            selectedCompanies={selectedCompanies}
            selectedBaseCompany={selectedBaseCompany}
          />
          {
            <button className='investBtn' onClick={handleOpenInvestModal}>
              나의 기업에 투자하기
            </button>
          }
          {isInvestModal && (
            <CreateMyStartupInvestment
              onClose={handleCloseInvestModal}
              startup={selectedCompanies}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ComparePage;
