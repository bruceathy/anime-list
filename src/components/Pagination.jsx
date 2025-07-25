import { handlePageChange } from "../utils";

export default function Pagination({ page, setPage, queryClient, queryKey }) {
  const handlePageChangeLocal = (newPage) => {
    handlePageChange(newPage, setPage, queryClient, queryKey);
  };

  return (
    <div className="pagination">
      {page === 1 ? (
        <button className="disabled">Previous</button>
      ) : (
        <button onClick={() => handlePageChangeLocal(page - 1)}>
          Previous
        </button>
      )}
      <span>Page {page}</span>
      <button onClick={() => handlePageChangeLocal(page + 1)}>Next</button>
    </div>
  );
}
