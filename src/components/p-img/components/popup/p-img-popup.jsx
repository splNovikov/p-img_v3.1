import React from 'react';
import {Tabs} from './tabs';
import {VisibleImagesList} from './images';
import './p-img-popup.scss';

export const PImgPopup = ({ onImageClick }) => {
  return (
    <div className="p-img-popup">

      <div className="primary-container">

        <div className="popup-header">
          <div className="header-title">Paste images to chat</div>
        </div>

        <Tabs/>

        <VisibleImagesList onImageClick={onImageClick}/>

      </div>

      <div className="triangle-down-wrapper">
        <div className="triangle-down"></div>
        <div className="triangle-down-border"></div>
      </div>

    </div>
  );
};

export default PImgPopup;