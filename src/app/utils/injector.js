import React from 'react';
import ReactDOM from 'react-dom';

import {VkButton} from '../components';

export const injector = {
  makeHtmlInjection
};

/**
 * Main injection function. It Injects to all buttons new html
 * @param rootObjects {Array<RootObject>}
 * @public
 * @returns {*}
 */
function makeHtmlInjection(rootObjects) {
  let rootObject = rootObjects[0];

  ReactDOM.render(<VkButton rootObject={rootObject}/>, rootObject.button);

  let slicedArray = rootObjects.slice(1);
  if (slicedArray.length !== 0) {
    return makeHtmlInjection(slicedArray);
  }
}