
import { useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import Error from '../../../main/templates/error/Error';
import Loader from '../../../main/templates/loader/Loader';
import Slider from '../../templates/home/slider/Slider';
import Welcome from '../../templates/home/welcome/Welcome';
import { SlideDataType } from '../../../../dataTypes/patoData.type';

function PatoHome({data}:{data:SlideDataType[]}) {

	const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });

	console.log(patoData)
	// useEffect(()=>{
	// 	fetch("/public/data/patodb.json").then(res => console.log(res))
	// 	console.log(data);
	// },[])
	return (
		<>
      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData && (
				<section>
					<Slider data={patoData.slides}/>
					<Welcome />

				</section>
			 )} 




		</>
	)
}

export default PatoHome