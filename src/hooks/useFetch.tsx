import { useEffect, useState } from "react";
import axios from "axios";
import { MainDataType } from "../dataTypes/mainDataType";
import { GlintDataType } from "../dataTypes/glintDataType";

type PropsType = {
	url: string;
	project: "main" | "glint";
}


function useFetch({url, project}: PropsType) {
  const [mainData, setMainData] = useState<MainDataType>({} as MainDataType);
  const [glintData, setGlintData] = useState<GlintDataType>({} as GlintDataType);
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
				} else {
					setGlintData(res.data);
				}
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

	if(project === "main"){
		return { mainData, pending, error };
	} else {
		return { glintData, pending, error };
	}

}

export default useFetch;
