import { useEffect, useState } from "react";
import axios from "axios";
import { MainDataType } from "../dataTypes/mainDataType";

function useFetch(url: string) {
  const [data, setData] = useState<MainDataType>({} as MainDataType);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setPending(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, pending, error };
}

export default useFetch;
