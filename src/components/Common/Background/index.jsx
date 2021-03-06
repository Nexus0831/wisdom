// node_modules
import React from 'react';
import { assets } from "../../../config/urls";

// styles
import {
  BackgroundImage,
  BackgroundEffect
} from './cssinjs/index';

class Background extends React.Component {
  render() {
    return(
        <BackgroundImage
          src={localStorage.getItem('background-url') ? localStorage.getItem('background-url') : assets[0]}
        >
          <BackgroundEffect>
          </BackgroundEffect>
        </BackgroundImage>
    );
  }
}

export default Background;