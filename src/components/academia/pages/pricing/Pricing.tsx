import React from "react";
import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Package from "../../templates/package/Package";

function Pricing() {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <>
      <PageHeader title="Just Select A Package Below" />
      <Package data={academiaData.packages} />
    </>
  );
}

export default Pricing;
