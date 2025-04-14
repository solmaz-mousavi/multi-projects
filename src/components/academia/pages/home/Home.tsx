import { useOutletContext } from 'react-router-dom';
import Blog from './components/blog/Blog';
import Courses from './components/course/Courses';
import Intro from './components/intro/Intro';
import OnlineCourse from './components/onlineCourses/OnlineCourse';
import Status from './components/status/Status';
import Testimonial from './components/testimonial/Testimonial';
import Welcome from './components/welcome/Welcome';
import { AcademiaDataType } from '../../../../dataTypes/academiaData.type';
import Category from './components/category/Category';
import Team from './components/team/Team';
import Package from './components/package/Package';

function Home() {
	const academiaData = useOutletContext<AcademiaDataType>();
	return (
		<>
        <section className="pato-home-wrapper">
          <Welcome />
          <Intro data={academiaData.intro} />
					<Status data={academiaData.status} />
					<Category data={academiaData.categories} />
          <Courses data={academiaData.courses} />
					<Team data={academiaData.teachers} />
					<Blog data={academiaData.blogs}/>

          <OnlineCourse data={academiaData.onlineCourse} />
          <Testimonial data={academiaData.testimonial} />
					<Package/>
        </section>

		
		
		
		</>
	)
}

export default Home