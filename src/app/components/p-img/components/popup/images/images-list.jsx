import React from 'react';
import Image from './image';
import './images.scss';

const ImagesList = ({ images, onImageClick }) => {
  return (
    <div className="images-container">
      {images.map(image =>
        <Image key={image.path}
               image={image}
               onImageClick={onImageClick}/>)}
    </div>
  );
};

export default ImagesList;
