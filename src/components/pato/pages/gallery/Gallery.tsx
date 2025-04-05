import { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import { intersection } from "../../../../utils/arrayIntersection";
import Pagination from "../../../main/modules/pagination/Pagination";
import SliderModal from "../../../main/modules/sliderModal/SliderModal";
import Header from "../../templates/header/Header";
import GalleryThumb from "./galleryThumb/GalleryThumb";
import "./gallery.scss";

function Gallery() {
  const [categories, setCategories] = useState<string[]>(["all"]);
  const [startIndex, setStartIndex] = useState(0);
  const [gallerySliderShow, setGallerySliderShow] = useState(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const sliderHandler = (index: number) => {
    setGallerySliderShow(true);
    setSlideNumber(index);
  };
  const selectCategory = (item: string) => {
    if (categories.includes(item)) {
      setCategories((pre) => pre.filter((i) => i !== item));
    } else {
      setCategories((pre) => [...pre, item].filter((i) => i !== "all"));
    }
  };
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
  let data;
  if (patoData?.gallery) {
    data = patoData.gallery.filter(
      (i) =>
        intersection(categories, i.categories).length > 0 ||
        categories.includes("all")
    );
  }

  return (
    <section className="pato-gallery-container">
      <Header title="gallery" section={true} />

      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData?.galleryCategory && (
        <div className="pato-galleryCategory-wrapper">
          <>
            <div
              className={`galleryCategory ${
                categories.includes("all") ? "selected" : ""
              }`}
              onClick={() => setCategories(["all"])}
            >
              All Photoes
            </div>
            {patoData.galleryCategory.map((item) => (
              <div
                key={item}
                className={`galleryCategory ${
                  categories.includes(item) ? "selected" : ""
                }`}
                onClick={() => selectCategory(item)}
              >
                {item}
              </div>
            ))}
          </>
        </div>
      )}

      <div className="pato-gallery-content">
        {data &&
          data
            .slice(startIndex, startIndex + 9)
            .map((item, index) => (
              <GalleryThumb
                key={item.id}
                index={index}
                {...item}
                sliderHandler={sliderHandler}
              />
            ))}
      </div>
      
        {data && (
          <div className="pato-gallery-pagination-wrapper">
            <Pagination
              dataLength={data.length}
              perPage={9}
              startIndex={startIndex}
              setStartIndex={setStartIndex}
            />
          </div>
        )}
      
      {data && gallerySliderShow && (
        <div className="modal-wrapper">
          <SliderModal
            data={data}
            setShowSlider={setGallerySliderShow}
            slideNumber={slideNumber}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
