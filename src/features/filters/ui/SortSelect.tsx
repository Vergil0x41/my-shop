import { useSearchParams } from "react-router-dom";
import { SORT_OPTIONS } from "../../product/config/sortOptions";
import "./SortSelect.scss";

export const SortSelect = () => {
  const [params, setParams] = useSearchParams();

  const currentSort = params.get("sort") || "";

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    const updated = new URLSearchParams(params);

    if (value) {
      updated.set("sort", value);
    } else {
      updated.delete("sort");
    }

    updated.delete("page");

    setParams(updated);
  };

  return (
    <div className="sort-select">
      <div className="sort-select__wrapper">

        <span className="sort-select__label">
          Sort by:
        </span>

        <select
          value={currentSort}
          onChange={handleChange}
        >
          {SORT_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};