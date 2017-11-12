// node_modules
import React from 'react';

// styles
import {
  BackgroundImage,
  BackgroundEffect
} from './cssinjs/index';

class Background extends React.Component {
  render() {
    return(
        <BackgroundImage>
          <BackgroundEffect>
          </BackgroundEffect>
        </BackgroundImage>
    );
  }
}

export default Background;