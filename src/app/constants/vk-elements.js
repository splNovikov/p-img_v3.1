/*
export const SEND_BUTTONS = ` button._im_send`;

export const IM_EDITABLE = `div.im_editable, 
                             div.im-chat-input--text, 
                             div._im_text, 
                             `;
*/

export const VK_ELEMENTS = {
  wallPost: {
    // This is the main box, contained all child elements.
    // On this box should be onclick with stopPropagation which we should cancel.
    boxSelectors: ['reply_box', 'submit_post_box', '_submit_post_box'],
    contentEditableSelectors: 'div.reply_field, div.submit_post_field',
    // should be inly one selector here.
    // because we are using adding pseudo-selector :not in finder.js
    buttonSelector: 'button.addpost_button'
  },
  smthElse: {
    boxSelectors: ['abrakadabra'],
    contentEditableSelectors: 'abrakadabra',
    buttonSelector: 'button.abrakadabra'
  }
};