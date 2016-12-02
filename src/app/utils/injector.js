export const injector = {
  inject
};

/**
 * Main injection function. It Injects to all buttons new html
 * @param rootObjects {Array<RootObject>}
 * @public
 * @returns {*}
 */
function inject(rootObjects) {
  let rootObject = rootObjects[0];
  rootObject.selfInject();

  let slicedArray = rootObjects.slice(1);
  if (slicedArray.length !== 0) {
    return inject(slicedArray);
  }
}

