import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import PageHeader from "../../modules/pageHeader/PageHeader";
import Status from "../../templates/status/Status";
import Team from "../../templates/team/Team";

function OurTeam() {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <>
      <PageHeader title="Meet Our Professional Team" />
			<Team data={academiaData.teachers} />
      <Status data={academiaData.status} />
    </>
  );
}

export default OurTeam;
