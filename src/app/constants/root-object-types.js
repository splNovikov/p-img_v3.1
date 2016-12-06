import {WallPost} from '../entities';

export const rootObjectTypes = {

  wallPost: {
    constructor: WallPost,

    // This is the main box, contained all child elements.
    // On this box should be onclick with stopPropagation which we should cancel.
    boxSelectors: ['reply_box', 'submit_post_box', '_submit_post_box'],
    contentEditableSelectors: 'div.reply_field, div.submit_post_field',
    mediaIconsContainer: 'div.media_selector',
    // should be only one selector here.
    // because we are using adding pseudo-selector :not in finder.js
    buttonSelector: 'button.addpost_button'
  },

  smthElse: {
    boxSelectors: ['abrakadabra'],
    contentEditableSelectors: 'abrakadabra',
    mediaIconsContainer: 'div.abrakadabra',
    buttonSelector: 'button.abrakadabra'
  }
};