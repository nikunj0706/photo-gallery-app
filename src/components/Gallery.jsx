import React, { useState } from "react";
import ImageModal from "./modals/NewImageModal";
import Images from "../collection";

function Gallery({ category }) {
  const [modalImage, setModalImg] = useState(null);

  const filteredImages =
    category === 1
      ? Images
      : Images.filter((item) => item.category === category);

  return (
    <>
      <div className="gallery">
        {filteredImages.map((item) => (
          <div key={item.id} className="img-box">
            <img
              src={item.url}
              onClick={() => setModalImg(item.url)}
              alt="image"
            />
          </div>
        ))}
      </div>
      {modalImage && <ImageModal img={modalImage} setModalImg={setModalImg} />}
    </>
  );
}

export default Gallery;
