import React from 'react';
import {Tabs} from './tabs';
import {VisibleImagesList} from './images';
import {AddInput} from './add-input';
import './p-img-popup.scss';

export const PImgPopup = ({ onImageClick, updateStorage }) => {
  return (
    <div className="p-img-popup">

      <div className="primary-container">

        <div className="popup-header">
          <div className="header-title">Paste images to chat</div>
        </div>

        <Tabs/>

        <VisibleImagesList onImageClick={onImageClick}
                           updateStorage={updateStorage}/>

        <AddInput updateStorage={updateStorage}/>

      </div>

      <div className="triangle-down-wrapper">
        <div className="triangle-down"></div>
        <div className="triangle-down-border"></div>
      </div>

    </div>
  );
};

export default PImgPopup;