import { useSearchParams } from "react-router-dom";
import { Pagination as MuiPagination, Stack, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import './Pagination.scss'

type Props = {
  total: number;
  limit: number;
};

export const Pagination = ({ total, limit }: Props) => {
  const [params, setParams] = useSearchParams();

  const isMobile = useMediaQuery("(max-width:600px)");

  const page = Number(params.get("page") || 1);
  const pageCount = Math.max(1, Math.ceil((total || 0) / limit));

  const setPage = (value: number) => {
    const updated = new URLSearchParams(params);
    updated.set("page", String(value));
    setParams(updated);
  };

  const handleChange = (_: any, value: number) => {
    setPage(value);
  };

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    if (page < pageCount) setPage(page + 1);
  };

  if (!total || pageCount <= 1) return null;

  return (
    <div className="pagination">
      {!isMobile && (
        <Stack spacing={2}>
          <MuiPagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            shape="rounded"
            color="primary"
          />
        </Stack>
      )}

      {isMobile && (
        <div className="pagination__mobile">
          <Button
            variant="outlined"
            onClick={prev}
            disabled={page === 1}
          >
            Prev
          </Button>

          <span className="pagination__page-info">
            {page} / {pageCount}
          </span>

          <Button
            variant="outlined"
            onClick={next}
            disabled={page === pageCount}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};