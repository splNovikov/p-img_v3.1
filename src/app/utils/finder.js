import {VK_ELEMENTS as vkElements} from '../constants';
import {pImgSettings} from '../constants';
import RootObject from './root-object';

export const finder = {
  getNewRootObjects
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
  return document.querySelectorAll(`${el.buttonSelector}:not(.${pImgSettings.ROOT_BUTTON_SELECTOR})`);
}

function createRootObjectsByButtons(buttons, elementType) {
  let res = [];

  for (let button of buttons) {
    let box = getParentWithClass(button, elementType.boxSelectors);
    res.push(new RootObject(elementType, button, box));
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

  window.console.error(`p-img: element with criteria ${JSON.stringify(classList)} not found`);
  return null;
}