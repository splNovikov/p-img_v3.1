import {VK_ELEMENTS as vkElements} from '../constants';
import {pImgSettings} from '../constants';
import RootObject from './RootObject';

export const finder = {
  getNewRootObjects,
  getParentWithClass
};

function getNewRootObjects() {
  let res = [];
  for (let i in vkElements) {
    if (vkElements.hasOwnProperty(i)) {
      let elementType = vkElements[i];
      let foundButtons = findButtonsInMarkup(elementType);
      let rootObjects = createRootObjectsByButtons(foundButtons, elementType);
      res = [...res, ...rootObjects];
    }
  }

  return res;
}

function findButtonsInMarkup(el) {
  return document.querySelectorAll(`${el.buttonSelector}:not(.${pImgSettings.ROOT_BUTTON_INJECTED_SELECTOR})`);
}

/**
 *
 * @param buttons
 * @param elementType
 * @returns {Array<RootObject>}
 */
function createRootObjectsByButtons(buttons, elementType) {
  let res = [];

  for (let button of buttons) {
    let box = getParentWithClass(button, elementType.boxSelectors);
    let editable = box.querySelector(elementType.contentEditableSelectors);
    res.push(new RootObject(elementType, button, box, editable));
  }

  return res;
}

function getParentWithClass(element, classList) {
  if ([...element.classList].some(function (v) {
      return classList.includes(v);
    })) {
    return element;
  }

  if (element.parentNode && element.parentNode.classList) {
    return getParentWithClass(element.parentNode, classList);
  }

  return null;
}