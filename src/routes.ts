import { RouteObject } from "react-router-dom";
import Glint from "./projects/Glint";
import Dashboard from "./projects/Dashboard";
import Pato from "./projects/Pato";
import PatoHome from "./components/pato/pages/patoHome/PatoHome";
import PatoAbout from "./components/pato/pages/about/About";
import PatoBlog from "./components/pato/pages/blog/Blog";
import PatoContact from "./components/pato/pages/contact/Contact";
import PatoGallery from "./components/pato/pages/gallery/Gallery";
import PatoMenu from "./components/pato/pages/menu/Menu";
import PatoReservation from "./components/pato/pages/reservation/Reservation";
import useFetch from "./hooks/useFetch";

const Router = ()=>{

	const { patoData, pending, error } = useFetch({
		url: "/data/patodb.json",
		project: "pato",
	});
	let router: RouteObject[] = [];
	if(patoData){
		
		
		router = [
			{path: "/", element: Glint() },
			{path: "/pato/*", element: Pato(), children:[
				{path: "", element: PatoHome({data: patoData?.slides}) },
				{path: "about", element: PatoAbout() },
				{path: "blog", element: PatoBlog() },
				{path: "contact", element: PatoContact() },
				{path: "gallery", element: PatoGallery() },
				{path: "menu", element: PatoMenu() },
				{path: "reservation", element: PatoReservation() }
			] },
			
			{path: "/dashboard", element: Dashboard()}
		];
	}
	return router
}
	export default Router;
	