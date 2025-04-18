import { useOutletContext } from "react-router-dom";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import Intro from "../../templates/intro/Intro";
import Status from "../../templates/status/Status";
import PageHeader from "../../modules/pageHeader/PageHeader";

function About() {
  const academiaData = useOutletContext<AcademiaDataType>();

  return (
    <>
      <PageHeader title="Know More About Us" />
      <Intro data={academiaData.intro} />
      <Status data={academiaData.status} />
    </>
  );
}

export default About;

