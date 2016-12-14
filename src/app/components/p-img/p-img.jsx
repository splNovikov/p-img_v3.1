import React from 'react';
import {PImgPopup} from './components/popup';
import {PopupToggle} from './components/popup-toggle';
import {pImgComponentSelectors} from './constants';
import './p-img.scss';

export const PImg = ({onImageClick, updateStorage}) => (
  <div className={pImgComponentSelectors.P_IMG}>
    <PImgPopup onImageClick={onImageClick}
               updateStorage={updateStorage}/>
    <PopupToggle/>
  </div>
);

export default PImg;
