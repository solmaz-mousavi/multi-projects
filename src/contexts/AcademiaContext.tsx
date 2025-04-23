import React from 'react';
import { createContext } from "react";
import { AcademiaDataType } from "../dataTypes/academiaData.type";
import useFetch from '../hooks/useFetch';
type AcademiaContextPropsType={
	academiaData?: AcademiaDataType;
	 pending:boolean;
	  error:string;
}
export const AcademiaContext = createContext<AcademiaContextPropsType>({} as AcademiaContextPropsType);

function AcademiaProvider({children}:{children:React.ReactNode}) {
	  const { academiaData, pending, error } = useFetch({
    url: "/data/academiadb.json",
    project: "academia",
  });
	return (
		<AcademiaContext.Provider value={{ academiaData, pending, error}}>{children}</AcademiaContext.Provider>
	)
}

export default AcademiaProvider