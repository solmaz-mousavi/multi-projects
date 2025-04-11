import { useEffect, useState } from "react";
import axios from "axios";
import { MainDataType } from "../dataTypes/mainData.type";
import { GlintDataType } from "../dataTypes/glintData.type";
import { PatoDataType } from "../dataTypes/patoData.type";
import { AcademiaDataType } from "../dataTypes/academiaData.type";

type PropsType = {
	url: string;
	project: "main" | "glint" | "pato" | "academia";
}


function useFetch({url, project}: PropsType) {
  const [mainData, setMainData] = useState<MainDataType>({} as MainDataType);
  const [glintData, setGlintData] = useState<GlintDataType>({} as GlintDataType);
  const [patoData, setPatoData] = useState<PatoDataType>({} as PatoDataType);
  const [academiaData, setAcademiaData] = useState<AcademiaDataType>({} as AcademiaDataType);
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
				} else if(project === "pato") {
					setPatoData(res.data);
				} else {
					setAcademiaData(res.data);
				}
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [project, url]);

	if(project === "main"){
		return { mainData, pending, error };
	} else if(project === "glint"){
		return { glintData, pending, error };
	} else if(project === "pato") {
		return { patoData, pending, error };
	} else {
		return { academiaData, pending, error };
	}

}

export default useFetch;
