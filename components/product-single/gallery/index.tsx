import React, { useState } from 'react';

type GalleryProductType = {
  images: string[];
}

const Gallery = ({ images }: GalleryProductType) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map(image => (
          <div
            key={image}
            className="product-gallery__thumb"
            onClick={() => handleThumbnailClick(image)} // Add click event
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={selectedImage} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
