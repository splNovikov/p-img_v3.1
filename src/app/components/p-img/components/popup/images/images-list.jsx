import React from 'react';
import Image from './image';
import './images.scss';

const ImagesList = ({ images, onImageClick, onDeleteClick }) => {
  return (
    <div className="images-container">
      {images.map(image =>
        <Image key={image.path}
               image={image}
               onImageClick={onImageClick}
               onDeleteClick={onDeleteClick}/>)}
    </div>
  );
};

export default ImagesList;
