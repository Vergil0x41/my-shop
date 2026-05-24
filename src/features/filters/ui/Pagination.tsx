import { useSearchParams } from "react-router-dom";
import "./Pagination.scss";
import * as ReactPaginateImport from 'react-paginate'


const ReactPaginate = ReactPaginateImport.default?.default 

type Props = {
  total: number;
  limit: number;
};

export const Pagination = ({ total, limit }: Props) => {
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page") || 1);
  const pageCount = Math.ceil(total / limit);

  const handlePageChange = (event: any) => {
    const selectedPage = event.selected + 1;

    const updated = new URLSearchParams(params);
    updated.set("page", String(selectedPage));

    setParams(updated);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageChange}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        forcePage={page - 1}
        renderOnZeroPageCount={null}
        containerClassName="pagination__container"
        pageClassName="pagination__page"
        activeClassName="active"
        previousClassName="pagination__nav"
        nextClassName="pagination__nav"
        disabledClassName="disabled"
      />
    </div>
  );
};
