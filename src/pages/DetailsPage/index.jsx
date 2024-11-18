import React from "react";
// import { useParams } from "react-router-dom";

import DetailsPageHeader from "./components/DetailsPageHeader/index";
import DetailsPageInfo from "./components/DetailsPageInfo/index";
import DetailsPageInvest from "./components/DetailsPageInvest/index";

function DetailsPage() {
  // const { companyId } = useParams();
  // const companyDetail = getCompanyDetail(companyId);
  console.log("DetailsPage");

  return (
    <div>
      <DetailsPageHeader />
      <DetailsPageInfo />
      <DetailsPageInvest />
    </div>
  );
}

export default DetailsPage;
