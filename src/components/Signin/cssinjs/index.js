// node_modules
import styled from 'styled-components';

// styled component

export const Form = styled.div`
  width: 350px;
  height: 600px;
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
`;

export const FormRow = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  color: #1AEF22;
  font-weight: 400;
  height: 50px;
  width: calc(100% + 16px);
  font-size: 30px;
  border: 3px solid #1AEF22;
  outline: 0 !important;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Helvetica Neue";
  margin-top: 30px;
  
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

