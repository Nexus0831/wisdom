import React from 'react';
import { render } from 'react-dom';

import store from './store';

import 'react-hot-loader/patch';
import $ from 'jquery';

import {
  Provider
} from 'react-redux';

// Scroll Event
$(window).scroll(() => {
  const scrollAmount = $(window).scrollTop();
  const ham = $('.hamburger-inner');
  const menu = $('#gc-hero-menu .ui.menu');

  if (scrollAmount === 0) {
    if (menu.hasClass('defaultTransparent')) {
      menu.addClass('transparentMenu');
    }
  } else {
    menu.removeClass('transparentMenu');
  }

  if (scrollAmount > window.innerHeight - 40) {
    ham.addClass('scroll');
  } else {
    ham.removeClass('scroll');
  }
});

// components
import App from './components/App';

render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

// hot reload
if (module.hot) {
  module.hot.accept(App, () => { render(<App />); });
}