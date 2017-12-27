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
          src={assets[Math.floor( Math.random() * 3 )]}
        >
          <BackgroundEffect>
          </BackgroundEffect>
        </BackgroundImage>
    );
  }
}

export default Background;