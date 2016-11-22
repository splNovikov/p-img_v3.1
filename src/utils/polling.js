import {finder} from './finder';
import {injector} from './injector';
import {selectors, pollingSettings} from '../constants';

export const polling = (ms) => {
  polling.currentMs = ms || pollingSettings.SHORT_POLLING_MS;

  polling.interval = setInterval(function () {
    // find all send buttons
    let sendBtnArr = finder.findButtons(selectors.SEND_BUTTONS);

    // if there are no any button -> restart polling
    if (sendBtnArr.length === 0) {
      restartPolling(polling, pollingSettings.SHORT_POLLING_MS);
      return;
    }

    // Find not injected
    let notInjectedButtons = injector.filterInjectedButtons(sendBtnArr, false);

    // if found - setPolling to Long and make injection to the new buttons
    if (notInjectedButtons.length !== 0) {
      restartPolling(polling, pollingSettings.LONG_POLLING_MS);
      injector.makeHtmlInjection(notInjectedButtons);
    }
  }, ms);
};

/**
 * restarts polling with new ms. If ms is not new - nothing happens.
 * @param polling {function}
 * @param newPollingMs {int}
 * @private
 */
function restartPolling(polling, newPollingMs) {
  if (polling.currentMs === newPollingMs) {
    return;
  }

  clearInterval(polling.interval);
  polling(newPollingMs);
}
