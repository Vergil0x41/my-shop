import { useSearchParams } from "react-router-dom";
import "./Pagination.scss";

type Props = {
  total: number;
  limit: number;
};

export const Pagination = ({ total, limit }: Props) => {
  const [params, setParams] = useSearchParams()

  const page = Number(params.get("page") || 1)
  const totalPages = Math.ceil(total / limit)

  const changePage = (newPage: number) => {
    const updated = new URLSearchParams(params)

    if (newPage <= 1) {
      updated.delete("page")
    } else {
      updated.set("page", String(newPage))
    }

    setParams(updated)
  };

  // 🔥 window logic (ВАЖНО)
  const getPages = () => {
    const pages = []

    const start = Math.max(1, page - 1)
    const end = Math.min(totalPages, page + 1)

    if (start > 1) pages.push(1)
    if (start > 2) pages.push("...")

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1) pages.push("...")
    if (end < totalPages) pages.push(totalPages)

    return pages;
  }

  const pages = getPages()

  return (
    <div className="pagination">

      <button
        disabled={page === 1}
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="dots">...</span>
        ) : (
          <button
            key={i}
            className={page === p ? "active" : ""}
            onClick={() => changePage(Number(p))}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>

    </div>
  )
}