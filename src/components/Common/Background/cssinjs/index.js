// node_modules
import styled from 'styled-components';
// import wisdomImg from '/Users/N.daigo/wisdom/wisdow_dev/wisdom/assets/cristina.jpg';

// styled component

// 背景画像
export const BackgroundImage = styled.div`
  display: table;
  width: calc(100% + 20px);
  height: calc(100vh + 20px);
  background-image: ${props => 'url(' + props.src + ')' };
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  overflow: hidden;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  margin : -10px;
  z-index: -1; 
`;

// 背景効果
export const BackgroundEffect = styled.div`
  width: calc(100% + 30px);
  height: calc(100vh + 30px);
  position: fixed;
  background-color: rgba(0, 0, 0, .6);
`;