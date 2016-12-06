import {finder} from './finder';
import {injector} from './injector';
import {pollingSettings} from '../constants';

export const polling = (ms) => {
  polling.currentMs = ms || pollingSettings.SHORT_POLLING_MS;

  polling.interval = setInterval(function () {
    // find all send buttons
    let newRootObjects = finder.getNewRootObjects();

    // if there are no any button -> restart polling
    // todo: to think it over: do we really need two types of polling?
    if (newRootObjects.length === 0) {
      restartPolling(polling, pollingSettings.SHORT_POLLING_MS);
    } else {
      injector.inject(newRootObjects);
      // when we found - setPolling to Long and make injection to the new buttons
      restartPolling(polling, pollingSettings.LONG_POLLING_MS);
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
