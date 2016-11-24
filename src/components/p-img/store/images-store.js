import {storeSettings} from '../constants';

const getData = () => {
  // //todo: this is just for development:
  // // remove it in future:
  // let images = getImages();
  // setData(STORE_SETTINGS_NAMESPACE, images);
  // return images;

  const store = localStorage.getItem(storeSettings.STORE_SETTINGS_NAMESPACE);
  return (store && JSON.parse(store)) || [];
};

const setData = (namespace, images) => {
  localStorage.setItem(namespace, JSON.stringify(images));
};

// todo remove it in future:
// const getImages = () => {
//   return [
//     {
//       title: 'boobs gif',
//       path: 'http://static1.fjcdn.com/thumbnails/comments/Lamangalamat+used+roll+picture+lamangalamat+rolled+image+i+found+one+_daec7902532889cd7f0a0e2a1ac27f6a.gif'
//     },
//
//     { title: 'Bla bla bla by Chandler M Bing', path: 'https://25.media.tumblr.com/tumblr_m83mmxbO5w1qh01r8o1_400.gif' },
//     { title: 'Todd high five', path: 'http://cs5.pikabu.ru/images/big_size_comm_an/2014-11_4/14165047217700.gif' },
//     { title: 'How u doing', path: 'https://24.media.tumblr.com/tumblr_m8rjytqrGK1r6g1koo1_500.gif' },
//     { title: 'Yeah baby!!!', path: 'http://leproimg.com/2133451.gif' },
//     { title: 'Кларксон', path: 'http://persephonemagazine.com/wp-content/uploads/2013/02/clarkson-bird.gif' },
//     {
//       title: 'Fuck',
//       path: 'https://quizzicalllama.files.wordpress.com/2013/12/fuck-fuck-off-funny-gif-hangover-favim-com-368894.gif'
//     },
//     { title: 'You are not original', path: 'http://leproimg.com/2119236.gif' },
//     { title: 'Микки Маус, да и хуй с ним!', path: 'https://pp.vk.me/c636428/v636428471/343f5/a_JR9130d9c.jpg' },
//     { title: 'Ах ты ублюдок', path: 'https://pp.vk.me/c624623/v624623651/47cc3/gWV6uQ3oXLo.jpg' },
//     { title: 'Вы зануда Серёжа', path: 'https://pp.vk.me/c630622/v630622505/1be2/7yMqLNuFXOA.jpg' },
//     { title: 'Ща лопну от смеха', path: 'http://cs7010.vk.me/v7010894/306a/CgYg2CXAsGo.jpg' },
//     { title: 'Пощади человек-анекдот', path: 'https://pp.vk.me/c627627/v627627777/20e44/BDApIgvDAxw.jpg' },
//     { title: '50 cent Баян', path: 'https://pp.vk.me/c623221/v623221829/45e98/FcVCS9YrnIc.jpg' },
//     { title: 'pImg logo', path: 'https://cs7060.vk.me/c629330/v629330002/19c38/JzFtB1_6a-k.jpg' },
//     { title: 'Хуёси', path: 'https://pp.vk.me/c623619/v623619729/49b12/YX4_OAoJZog.jpg' },
//     { title: 'Стиффлер показывает факи', path: 'https://pp.vk.me/c627725/v627725520/1b1a6/Bq7EwdtRg6w.jpg' },
//     { title: 'Английский fuck you', path: 'https://pp.vk.me/c622830/v622830410/53d7e/95yWb1xf1h4.jpg' },
//     { title: 'Fuck you for iphoners', path: 'https://pp.vk.me/c624216/v624216904/50168/FO8AUMfqOII.jpg' },
//     { title: 'Fuck you img', path: 'https://pp.vk.me/c624221/v624221815/5cddd/lkLpEg3SB8k.jpg' },
//     { title: 'дайте кирпич', path: 'https://pp.vk.me/c627218/v627218777/1d9f3/CdaG8iADZrQ.jpg' }
//   ];
// };

export {getData, setData};
