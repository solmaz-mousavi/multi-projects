import { useEffect, useState } from "react";
import axios from "axios";
import { mainDataType } from "../dataTypes/mainDataType";

function useFetch(url: string) {
  const [data, setData] = useState<mainDataType>(null);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.breakPoints);
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
