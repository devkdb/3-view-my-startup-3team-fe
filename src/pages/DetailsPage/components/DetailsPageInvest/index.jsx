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

const MAX_ITEMS = 5;

function DetailsPageInvest() {
  const { companyId } = useParams();
  console.log(`DetailsPageInvest: companyId:${companyId}`);

  // 5개의 기업투자리스트를 받아온다.
  const maxItems = MAX_ITEMS;
  const [currentPage, setCurrentPage] = useState(1);
  const { investors, error, totalCount } = useFetchInvestors(
    companyId,
    currentPage,
    maxItems
  );

  // 기업 정보를 얻어온다.
  const { startup } = useFetchStartup(companyId);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isPatchModalOpen, setPatchModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpenCreateModal = () => setCreateModalOpen(true);
  const handleCloseCreateModal = () => setCreateModalOpen(false);

  const handleOpenPatchModal = () => setPatchModalOpen(true);
  const handleClosePatchModal = () => setPatchModalOpen(false);

  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  // 수정하기, 삭제하기
  const handleMenuClick = (investor) => {
    setSelectedInvestor(investor);
    setDropdownOpen((prev) => !prev);
  };

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
    return <Warn variant="error" title="오류발생" description={error} />;
  }

  if (!startup) {
    return;
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
                            alt="더보기 아이콘"
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
              {/*페이지네이션 위치/> */}
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
