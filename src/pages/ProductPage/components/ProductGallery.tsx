import { useState } from "react"
import "./ProductGallery.scss"

type Props = {
  images: string[];
};

export const ProductGallery = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  const safeImages =
    images && images.length > 0 ? images : [];

  const current =
    safeImages[index] || "";

  const next = (e: any) => {
    e.stopPropagation();
    setIndex((prev) =>
      prev === safeImages.length - 1 ? 0 : prev + 1
    );
  };

  const prev = (e: any) => {
    e.stopPropagation();
    setIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : prev - 1
    );
  };

  if (!safeImages.length) {
    return <div>No images</div>;
  }

  return (
    <div className="gallery">

      {/* MAIN IMAGE */}
      <div className="gallery__main">

        <img src={current} alt="product" />

        {/* ARROWS */}
        <button className="gallery__btn left" onClick={prev}>
          ‹
        </button>

        <button className="gallery__btn right" onClick={next}>
          ›
        </button>

      </div>

      {/* THUMBNAILS */}
      <div className="gallery__thumbs">

        {safeImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}

      </div>

    </div>
  );
};