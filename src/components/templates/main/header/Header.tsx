import { mainDataType } from "../../../../dataTypes/mainDataType";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../modules/main/button/Button";

function Header() {
  const { data, pending, error }:{
		data: mainDataType;
		pending: boolean;
		error: string;
	} = useFetch("/data/maindb.json");

  return (
    <>
      {/* <Loader type="data" /> */}
      {/* <Error error="ye moshkeli hast..."/> */}

      {error && <Error error={error} />}
      {pending && <Loader type="data"/>}
      {data?.breakPoints && (
        <section className="header-wrapper">
          <div className="header-left">
            <h1>
						<a href="#">Select Prject</a>
            </h1>
						</div>
						<div className="header-right">
      {
	data.breakPoints.map(item => (
		<>
		
		
		
		<Button iconName="Fa9" type="iconBtn" color="dark" title={String(item.display)} />
		
		
		{/* {item.display} */}
		
		
		
		
		
		</>
	))}
		
      </div>
        </section>
  )};
	</>
)
}



export default Header;
