import {iosVhFix} from './utils/ios-vh-fix';
import {initGym} from './modules/gym';
import {initTabs} from './modules/subscriptions-tabs';
import {initForms} from './modules/form-module';
import {initPlaceholder} from './modules/place-holder';
import {initMask} from './modules/tel-mask';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    initGym();
    initTabs();
    initForms();
    initPlaceholder();
    initMask();
  });
});
