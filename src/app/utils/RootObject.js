import React from 'react';
import ReactDOM from 'react-dom';

import {VkButton} from '../components';
import {pImgComponentSelectors} from '../components/p-img/constants';
import {pImgSettings} from '../constants';

import {finder} from './finder';

export default class RootObject {

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  // TODO: make this class Parent for types wallPost and some other

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

    // 2.
    this._overrideBoxBehaviour(this.box);

    // 3. Injection to button. Comment it if don't need to.
    ReactDOM.render(<VkButton rootButton={this.button}
                              rootEditable={this.editable}/>, this.button);
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

  /**
   * @param box
   * @private
   */
  _overrideBoxBehaviour(box) {
    let oldOnclick = box.onclick;

    box.onclick = (e) => {
      if (!finder.getParentWithClass(e.target, pImgComponentSelectors.P_IMG)) {
        oldOnclick(e);
      }
    };
  }

}