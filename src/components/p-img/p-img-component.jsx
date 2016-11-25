import React from 'react';
import {Provider} from 'react-redux';
import {PImg} from './p-img';
import configureStore from './store/configure-store';

export class PImgComponent extends React.Component {

  // -------------------------------------------------------------------------
  // Mounting
  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      editable: props.editable
    };

    this.onImageClick = this.onImageClick.bind(this);
  }

  // -------------------------------------------------------------------------
  // Updating
  // -------------------------------------------------------------------------

  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <PImg onImageClick={this.onImageClick}/>
      </Provider>
    );
  }

  onImageClick(event) {
    event.stopPropagation();

    let src = event.target.getAttribute('src');

    if (!src || !this.state.editable) {
      return null;
    }

    // To prevent existing image in clipboard - clear it.
    // If we will not do this - this picture will be inserted too.
    this._copyTextToClipboard(' ');

    this.state.editable.focus();

    // emulation VK behavior
    document.execCommand('insertText', false, src + ' ');
    document.execCommand('paste');
  }

  // todo: temporary stay it here:
  /**
   * Mechanism which puts text to clipboard
   * http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
   * @param text {String}
   * @private
   */
  _copyTextToClipboard(text) {
    let _textArea = document.createElement("textarea");
    _textArea.value = text;

    document.body.appendChild(_textArea);

    _textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.log('p-img: Oops, unable to copy src to clipboard');
    }

    document.body.removeChild(_textArea);
  }
}


PImgComponent.propTypes = {
  editable: React.PropTypes.object
};

export default PImgComponent;