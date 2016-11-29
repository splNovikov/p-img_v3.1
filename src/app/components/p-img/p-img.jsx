import React from 'react';
import {PImgPopup} from './components/popup';
import {PopupToggle} from './components/popup-toggle';
import './p-img.scss';

export const PImg = ({onImageClick}) => (
  <div className="p-img">
    <PImgPopup onImageClick={onImageClick}/>
    <PopupToggle/>
  </div>
);

export default PImg;
