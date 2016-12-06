import {storeSettings, defaultImages} from '../constants';

const setData = (namespace, images) => {
  localStorage.setItem(namespace, JSON.stringify(images));
};


const getData = () => {
  const store = localStorage.getItem(storeSettings.STORE_SETTINGS_NAMESPACE);

  if (!store) {
    setData(storeSettings.STORE_SETTINGS_NAMESPACE, defaultImages);
  }

  return (store && JSON.parse(store)) || defaultImages;
};

export {setData, getData};
