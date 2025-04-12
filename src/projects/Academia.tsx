import AcademiaIndex from "../components/academia/academiaIndex"
import useFetch from "../hooks/useFetch";


function Academia() {
	const { academiaData, pending, error } = useFetch({
    url: "/data/academiadb.json",
    project: "academia",
  });
	return (
		<>
		{academiaData && (

			<AcademiaIndex academiaData={academiaData} />
		)}
		</>
	)
}

export default Academia