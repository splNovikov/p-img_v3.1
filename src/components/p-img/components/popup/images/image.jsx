import React from 'react';

const Image = ({ image, onImageClick }) => {
  return (
    <div className="image-wrapper">
      <img src={image.path}
           alt={image.title}
           title={image.title}
           onClick={onImageClick}/>
    </div>
  );
};

export default Image;