import {storeSettings, defaultImages} from '../constants';

const setData = (images) => {
  localStorage.setItem(storeSettings.STORE_SETTINGS_NAMESPACE, JSON.stringify(images));
};


const getData = () => {
  const store = localStorage.getItem(storeSettings.STORE_SETTINGS_NAMESPACE);

  if (!store) {
    setData(defaultImages);
  }

  return (store && JSON.parse(store)) || defaultImages;
};

export const imagesStore = {
  setData: setData,
  getData: getData
};

