import {rootObjectTypes, pImgSettings} from '../constants';

export const finder = {
  getNewRootObjects
};

function getNewRootObjects() {
  let res = [];
  for (let i in rootObjectTypes) {
    if (rootObjectTypes.hasOwnProperty(i)) {
      let elementType = rootObjectTypes[i];
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
    let editable = box.querySelector(elementType.contentEditableSelectors);;
    res.push(new elementType.constructor(elementType, button, box, editable));
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