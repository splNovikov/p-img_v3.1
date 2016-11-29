export const pasteEmulation = (src, editable) => {
  // To prevent existing image in clipboard - clear it.
  // If we will not do this - this picture will be inserted too.
  copyTextToClipboard(' ');

  editable.focus();

  // emulation VK behavior
  document.execCommand('insertText', false, src + ' ');
  document.execCommand('paste');
};

/**
 * Mechanism which puts text to clipboard
 * http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
 * @param text {String}
 * @private
 */
function copyTextToClipboard(text) {
  let textArea = document.createElement("textarea");
  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('p-img: Oops, unable to copy src to clipboard');
  }

  document.body.removeChild(textArea);
}