import { useSearchParams } from "react-router-dom"
import "./CategoryChips.scss"

const categories = [
  "all",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "laptops",
  "smartphones",
  "tablets",
  "tops",
  "vehicle",
  "sunglasses",
  "motorcycle",
  "skin-care"
]

export const CategoryChips = () => {
  const [params, setParams] = useSearchParams();

  const active = params.get("category") || "all"

  const handleClick = (cat: string) => {
    const updated = new URLSearchParams(params)

    updated.delete("page");

    if (cat === "all") {
      updated.delete("category")
    } else {
      updated.set("category", cat)
    }

    setParams(updated)
  }

  return (
    <div className="chips">
      {categories.map((cat) => (
        <div
          key={cat}
          className={`chips__item ${
            active === cat ||
            (!params.get("category") && cat === "all")
              ? "chips__item--active"
              : ""
          }`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  )
}