import { ScaleLoader } from "react-spinners";
import "./loader.scss";
type LoaderPropsType = {
  type: "data" | "";
};

function Loader(props: LoaderPropsType) {
  return (
    <div className="loader-container">
      {props.type == "data" && (
        <>
          <ScaleLoader color="#3ca391" height={35} radius={4} width={6} />
          <p className="loader-txt">loading</p>
        </>
      )}
    </div>
  );
}

export default Loader;
