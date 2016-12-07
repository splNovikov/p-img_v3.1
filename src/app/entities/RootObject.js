// import React from 'react';
// import ReactDOM from 'react-dom';
// import {VkButton} from '../components';

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
    // 1. Mark button as injected - to prevent further injection:
    this._assignRootButtonClass(this.button, pImgSettings.ROOT_BUTTON_INJECTED_SELECTOR);

    // 2. Injection to button. Comment it if don't need to.
    // ReactDOM.render(<VkButton rootButton={this.button}
    //                           rootEditable={this.editable}/>, this.button);
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