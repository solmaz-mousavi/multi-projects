import { useOutletContext } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import Error from '../../../main/templates/error/Error';
import Loader from '../../../main/templates/loader/Loader';
import Blog from './components/blog/Blog';
import Courses from './components/courses/Courses';
import Intro from './components/intro/Intro';
import OnlineCourse from './components/onlineCourses/OnlineCourse';
import Pricing from './components/pricing/Pricing';
import Status from './components/status/Status';
import Testimonial from './components/testimonial/Testimonial';
import Welcome from './components/welcome/Welcome';
import { useEffect } from 'react';
import { AcademiaDataType } from '../../../../dataTypes/academiaData.type';

function Home() {
	const academiaData = useOutletContext();
	// const { academiaData, pending, error } = useFetch({
  //   url: "/data/academiadb.json",
  //   project: "academia",
  // });

	useEffect(()=>{
		console.log(academiaData)
	})
	return (
		<>
		      {/* {error && <Error error={error} fullScreen={true} />}
					{pending && <Loader type="data" fullScreen={true} />} */}
					{/* {academiaData && ( */}
        <section className="pato-home-wrapper">
          <Welcome />
          {/* <Intro data={academiaData.intro} />
					<Status data={academiaData.status} />
          <Courses data={academiaData.courses} />
          <OnlineCourse data={academiaData.onlineCourse} />
          <Testimonial data={academiaData.testimonial} />
					<Blog data={academiaData.blogs}/>
          <Pricing data={academiaData.pricing} /> */}
        </section>
      {/* )} */}
		
		
		
		</>
	)
}

export default Home