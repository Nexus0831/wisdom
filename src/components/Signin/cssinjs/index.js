// node_modules
import styled from 'styled-components';

import {
  Link
} from 'react-router-dom';

// styled component

export const Form = styled.div`
  width: 350px;
  height: 600px;
  
  @media (max-width: 619px) {
    height: 400px;
  }
  
`;

export const Centered = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.75);
  width: 100%;
  font-family: "Arial Hebrew";
  font-size: 70px;
  text-align: center;
  font-weight: 100;
  
  @media (max-width: 619px) {
    font-size: 40px;
  }
  
  }
`;

export const FormRow = styled.div`
  width: 100%;
  padding-bottom: 40px;
  height: 100px;
  
  @media (max-width: 619px) {
    padding: 0 30px 0;
    height: 70px;
  }
`;

export const Button = styled.button`
  color: #1AEF22;
  font-weight: 300;
  height: 50px;
  width: 100%;
  font-size: 25px;
  border: 3px solid #1AEF22;
  outline: 0 !important;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Helvetica Neue";
  margin-top: 30px;
  border-radius: 0;
  transition-duration: .3s;
  
  &:hover {
    background-color: rgba(26, 239, 34, .15);
    cursor: pointer;
  }
  
  &:disabled {
    color: gray !important;
    border: 3px solid gray !important;
    background-color: rgba(0, 0, 0, 0);
    cursor: auto;
  }
`;

export const CustomLink = styled(Link)`
  color: #15B0DE;
  text-decoration: underline;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  &:hover {
    color: #37D2FF;
    text-decoration: underline;
  }
`;

