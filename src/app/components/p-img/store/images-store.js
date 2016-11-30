import {storeSettings} from '../constants';

const getData = () => {
  const store = localStorage.getItem(storeSettings.STORE_SETTINGS_NAMESPACE);
  let defaultImages = [];

  if (!store) {
    defaultImages = getDefaultImages();
    setData(storeSettings.STORE_SETTINGS_NAMESPACE, defaultImages);
  }

  return (store && JSON.parse(store)) || defaultImages;
};

const setData = (namespace, images) => {
  localStorage.setItem(namespace, JSON.stringify(images));
};

const getDefaultImages = () => {
  return [
    { title: 'How u doing', path: 'https://24.media.tumblr.com/tumblr_m8rjytqrGK1r6g1koo1_500.gif' },
    { title: 'Стиффлер показывает факи', path: 'https://pp.vk.me/c627725/v627725520/1b1a6/Bq7EwdtRg6w.jpg' }
  ]
};

export {getData, setData};
