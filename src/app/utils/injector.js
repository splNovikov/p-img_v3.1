import React from 'react';
import ReactDOM from 'react-dom';

import {VkButton} from '../components';
import {pImgSettings} from '../constants';

export const injector = {
  makeHtmlInjection,
  filterInjectedButtons
};

/**
 * Main injection function. It Injects to all buttons new html
 * @param buttonsWithContentEditable {Array}
 * @public
 * @returns {*}
 */
function makeHtmlInjection(buttonsWithContentEditable) {
  let obj = buttonsWithContentEditable[0];

  ReactDOM.render(<VkButton text={obj.button.textContent}
                            root={obj.button}
                            editable={obj.contentEditable}/>, obj.button);

  let slicedArray = buttonsWithContentEditable.slice(1);
  if (slicedArray.length !== 0) {
    return makeHtmlInjection(slicedArray);
  }
}

/**
 * Filters from send buttons -
 * returns only not "injected buttons" or only "injected"
 * @param sendBtnArr {NodeList}
 * @param isInjected {Boolean} - true -> return injected; false -> return not injected
 * @returns {Array}
 * @private
 */
function filterInjectedButtons(sendBtnArr, isInjected) {
  return [...sendBtnArr].filter(function (sendBtn) {
    return sendBtn.classList.contains(pImgSettings.ROOT_BUTTON_SELECTOR) === isInjected;
  });
}
