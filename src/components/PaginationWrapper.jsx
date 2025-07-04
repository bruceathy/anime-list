import { useQueryClient } from "@tanstack/react-query";
import Pagination from "./Pagination";

export default function PaginationWrapper({ page, setPage, queryKey }) {
  const queryClient = useQueryClient();

  return (
    <Pagination
      page={page}
      setPage={setPage}
      queryClient={queryClient}
      queryKey={queryKey}
    />
  );
}
