import React from 'react';
import {PImgPopup} from './components/popup';
import {PopupToggle} from './components/popup-toggle';
import {pImgComponentSelectors} from './constants';
import './p-img.scss';

export const PImg = ({onImageClick}) => (
  <div className={pImgComponentSelectors.P_IMG}>
    <PImgPopup onImageClick={onImageClick}/>
    <PopupToggle/>
  </div>
);

export default PImg;
