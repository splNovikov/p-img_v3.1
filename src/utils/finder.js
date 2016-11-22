export const finder = {
  findButtons,
  getImEditableForEl
};

/**
 * Find all buttons with selectors from buttonsSelectors
 * @param buttonsSelectors {String}
 * @returns {NodeList}
 */
function findButtons(buttonsSelectors) {
  return document.querySelectorAll(buttonsSelectors);
}

/**
 * Returns imEditable textarea for button
 * @param el {Node}
 * @param selectorsList {Array<String>}
 * @param maxParent {Number}
 * @param currentParent {?Number}
 */
function getImEditableForEl(el, selectorsList, maxParent, currentParent) {
  let _el = el.parentNode;
  let _imEditable = _el.querySelector(selectorsList);

  currentParent = currentParent || 0;

  if (_imEditable) {
    return _imEditable;
  } else {
    currentParent += 1;
    if (currentParent === maxParent) {
      window.console.error('p-img: editable aria not found');
      return null;
    } else {
      return getImEditableForEl(_el, selectorsList, maxParent, currentParent);
    }
  }
}