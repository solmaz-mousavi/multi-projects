import { useOutletContext } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Courses from "./components/course/Courses";
import Status from "../../templates/status/Status";
import Welcome from "./components/welcome/Welcome";
import { AcademiaDataType } from "../../../../dataTypes/academiaData.type";
import Category from "./components/category/Category";
import Team from "./components/team/Team";
import Intro from "../../templates/intro/Intro";
import Package from "./components/package/Package";

function Home() {
  const academiaData = useOutletContext<AcademiaDataType>();
  return (
    <>
      <Welcome />
      <Intro data={academiaData.intro} />
      <Status data={academiaData.status} />
      <Category data={academiaData.categories} />
      <Courses data={academiaData.courses} />
      <Team data={academiaData.teachers} />
      <Blog data={academiaData.blogs} />
      <Package data={academiaData.packages} />
    </>
  );
}

export default Home;
