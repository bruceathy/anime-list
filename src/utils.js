export const handlePageChange = (newPage, setPage, queryClient, queryKey) => {
  if (newPage < 1) return;
  setPage(newPage);
  queryClient.invalidateQueries([queryKey]);
};
