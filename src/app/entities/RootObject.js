import {pImgSettings} from '../constants';

export default class RootObject {

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(elementType, button, box, editable) {
    this.elementType = elementType;
    this.box = box;
    this.button = button;
    this.editable = editable;
  }

  // -------------------------------------------------------------------------
  // Public functions
  // -------------------------------------------------------------------------

  selfInject() {
    // Mark button as injected - to prevent further injection:
    this._assignRootButtonClass(this.button, pImgSettings.ROOT_BUTTON_INJECTED_SELECTOR);
  }

  // -------------------------------------------------------------------------
  // Private functions
  // -------------------------------------------------------------------------

  /**
   * @param rootBtn
   * @param className String
   * @private
   */
  _assignRootButtonClass(rootBtn, className) {
    rootBtn.classList += ` ${className}`;
  }

}