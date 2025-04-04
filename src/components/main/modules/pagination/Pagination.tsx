import "./pagination.scss";
type PaginationPropsType = {
  dataLength: number;
  perPage: number;
	startIndex:number;
  setStartIndex: (startIndex: number) => void;
};
function Pagination({
  dataLength,
  perPage,
	startIndex,
  setStartIndex,
}: PaginationPropsType) {
  const pages = Array.from(Array(Math.ceil(dataLength / perPage)).keys());
  return (
    <div className="pagination-container">
      {pages.map((item) => (
        <div
          className={`pagination-item ${startIndex === item * perPage ? "active" : ""}`}
          onClick={() => setStartIndex(item * perPage)}
        >
          {item + 1}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
