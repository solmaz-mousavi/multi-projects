
import Header from './templates/header/Header'
import Navbar from './templates/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './templates/footer/Footer'

function AcademiaIndex() {
	return (
		<div>
			<Header/>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</div>
	)
}

export default AcademiaIndex