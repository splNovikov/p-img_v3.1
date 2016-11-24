import React from 'react';
import './images.scss';

export const ImagesList = ({ images }) => {
  return (
    <div className="images-container">
      {images.map(image =>
        <div className="image-wrapper"
             key={image.path}>
          <img src={image.path} alt={image.title} title={image.title}/>
        </div>)}
    </div>
  );
};

ImagesList.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default ImagesList;
