import { useEffect, useState } from "react";
import axios from "axios";
import { MainDataType } from "../dataTypes/mainData.type";
import { GlintDataType } from "../dataTypes/glintData.type";
import { PatoDataType } from "../dataTypes/patoData.type";

type PropsType = {
	url: string;
	project: "main" | "glint" | "pato";
}


function useFetch({url, project}: PropsType) {
  const [mainData, setMainData] = useState<MainDataType>({} as MainDataType);
  const [glintData, setGlintData] = useState<GlintDataType>({} as GlintDataType);
  const [patoData, setPatoData] = useState<PatoDataType>({} as PatoDataType);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
				setPending(false);
        setError("");
				if(project === "main"){
					setMainData(res.data);
				} else if(project === "glint") {
					setGlintData(res.data);
				} else {
					setPatoData(res.data);
				}
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

	if(project === "main"){
		return { mainData, pending, error };
	} else if(project === "glint"){
		return { glintData, pending, error };
	} else {
		return { patoData, pending, error };
	}

}

export default useFetch;
