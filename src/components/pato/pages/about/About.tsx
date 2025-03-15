import { useOutletContext } from "react-router-dom"


function About() {
	const bb = useOutletContext<{b:number}>();
	return (
		<div>
			<h1>1</h1>
			<h1>2</h1>
			<h1>3</h1>
			{bb && <p>{bb.b}</p>}
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
			<h1>lodishfnvlikfgbv</h1>
		</div>
	)
}

export default About