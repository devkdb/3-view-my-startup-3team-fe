import styles from "./index.module.css";
import kebab from "../../../../assets/images/icons/ic_kebab.svg";
import { useState, useEffect, useRef } from "react";
import { formatAmount } from "../../utils/formatAmount";
import CreateCompanyInvestment from "../CreateCompanyInvestment/index";
import PatchCompanyInvestment from "../PatchCompanyInvestment/index";
import DeleteCompanyInvestment from "../DeleteCompanyInvestment/index";
import DropdownMenu from "../DropdownMenu/index";
import { useParams } from "react-router-dom";
import useFetchInvestors from "../../../../hooks/useFetchInvestors";
import useFetchStartup from "../../../../hooks/useFetchCompanyDetail";
import Warn from "../../../../components/Warn";
import Pagination from "../../Pagination/index";
//import Pagination from "../../Pagination_new/index";

const MAX_ITEMS = 5;

function DetailsPageInvest() {
  const { startupId } = useParams();
  console.log(`DetailsPageInvest: startupId:${startupId}`);

  const maxItems = MAX_ITEMS; // 5개의 기업투자리스트를 받아온다.
  const [currentPage, setCurrentPage] = useState(1);
  const { investors, error, totalCount, showLoading } = useFetchInvestors(
    startupId,
    currentPage,
    maxItems
  );

  // 기업 정보를 얻어온다.
  const { startup } = useFetchStartup(startupId);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isPatchModalOpen, setPatchModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 모달 열기/닫기 함수들이 유사하므로, 하나의 함수로 통합한다.
  const toggleModal = (setter) => setter((prev) => !prev);

  const handleOpenCreateModal = () => toggleModal(setCreateModalOpen);
  const handleCloseCreateModal = () => toggleModal(setCreateModalOpen);

  const handleOpenPatchModal = () => toggleModal(setPatchModalOpen);
  const handleClosePatchModal = () => toggleModal(setPatchModalOpen);

  const handleOpenDeleteModal = () => toggleModal(setDeleteModalOpen);
  const handleCloseDeleteModal = () => toggleModal(setDeleteModalOpen);

  const handleMenuClick = (investor) => {
    setSelectedInvestor(investor);
    setDropdownOpen((prev) => !prev);
  };

  // 수정하기, 삭제하기
  const handleDropdownOptionClick = (action) => {
    setDropdownOpen(false);
    if (action === "patch") {
      handleOpenPatchModal();
    } else if (action === "delete") {
      handleOpenDeleteModal();
    }
  };

  //  !dropdownRef.current.contains(event.target) <-- 해당 엘리먼트의 바깥이 클릭 됐을 때
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  if (error) {
    return (
      <Warn
        variant='error'
        title='투자자 목록을 불러오는 중에 오류가 발생했습니다.'
        description={error}
      />
    );
  }

  if (showLoading && !investors) {
    return <div>목록을 불러오는 중입니다....</div>;
  }

  if (!startup) {
    return null;
  }

  // 주어진 숫자보다 크거나 같은 가장 작은 정수 반환
  const totalPages = Math.ceil(totalCount / maxItems);

  return (
    <div className={styles.content}>
      <div className={styles.headerBox}>
        <div className={styles.header}>
          <h1>View My Startup에서 받은 투자</h1>
          <button onClick={handleOpenCreateModal} style={{ cursor: "pointer" }}>
            기업 투자하기
          </button>
        </div>
      </div>
      <div>
        <h1>총 {formatAmount(startup.simInvest)}원</h1>
        <div className={styles.wrapper}>
          {investors && investors.length > 0 ? (
            <>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th style={{ width: "8.4rem" }}>투자자 이름</th>
                      <th style={{ width: "8.4rem" }}>순위</th>
                      <th style={{ width: "8.4rem" }}>투자 금액</th>
                      <th style={{ width: "auto" }}>투자 코멘트</th>
                      <th style={{ width: "6.4rem" }}> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {investors.map((item) => (
                      <tr key={item.id}>
                        <td className={styles.name}>{item.name}</td>
                        <td>{item.rank}위</td>
                        <td>{formatAmount(item.investAmount)} 원</td>
                        <td style={{ textAlign: "left" }}>{item.comment}</td>
                        <td style={{ position: "relative" }}>
                          <img
                            src={kebab}
                            alt='더보기 아이콘'
                            onClick={() => handleMenuClick(item)}
                            style={{ cursor: "pointer" }}
                          />
                          {selectedInvestor?.id === item.id && dropdownOpen && (
                            <div ref={dropdownRef}>
                              <DropdownMenu
                                onPatch={() =>
                                  handleDropdownOptionClick("patch")
                                }
                                onDelete={() =>
                                  handleDropdownOptionClick("delete")
                                }
                              />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                // className='pagination'
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className={styles.null}>
              아직 투자한 기업이 없어요,
              <br />
              버튼을 눌러 기업에 투자해보세요!
            </div>
          )}
        </div>
      </div>
      {isCreateModalOpen && (
        <CreateCompanyInvestment
          onClose={handleCloseCreateModal}
          startup={startup}
        />
      )}
      {isPatchModalOpen && selectedInvestor && (
        <PatchCompanyInvestment
          onClose={handleClosePatchModal}
          startup={startup}
          mockInvestor={selectedInvestor}
        />
      )}
      {isDeleteModalOpen && selectedInvestor && (
        <DeleteCompanyInvestment
          onClose={handleCloseDeleteModal}
          mockInvestor={selectedInvestor}
        />
      )}
    </div>
  );
}
export default DetailsPageInvest;
