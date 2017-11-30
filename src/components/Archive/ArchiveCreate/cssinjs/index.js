// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

// styled component
export const MyContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 20px 600px 20px 40px 20px;
  grid-template-columns: 78% 2% 20%;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
`;

export const TitleArea = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

export const SharingArea = styled.div`
  text-align: center;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
`;

export const MainArea = styled.div`
  //background-color: #F3D179;
  grid-row: 3 / 4;
  grid-column: 1 / 4;
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 50% 50%;
`;

export const ToolBar = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  border: 2px solid #fff;
  border-bottom: none;
`;

export const EditorArea = styled.div`
  grid-row: 1;
  grid-column: 1 / 2;
`;

export const PreviewArea = styled.div`
  grid-row: 1;
  grid-column: 2 / 3;
  border: 2px solid #fff;
  border-left: none;
  padding: 10px;
`;

export const FullPreviewArea = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  border: 2px solid #fff;
  color: #fff !important;
  padding: 10px;
`;

export const DividedArea = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 50%;
`;

// export const MarkdownEditor = styled.textarea`
//   outline: 0 !important;
//   padding: 10px;
//   font-size: 18px;
//   resize: none;
//   border: 2px solid #fff;
//   background-color: rgba(0, 0, 0, 0);
//   color: white;
//   line-height: 1.5;
//   font-family: Menlo;
//   width: 100% !important;
//   height: 100% !important;
//
//   &:focus {
//     background-color: rgba(255, 255, 255, .2);
//   }
//
//   &::selection {
//     background-color: rgba(255, 255, 255, .4);
//   }
//
//   &::-moz-selection {
//     background-color: rgba(255, 255, 255, .4);
//   }
//
// `;

export const SubmitArea = styled.div`
  grid-row: 5 / 6;
  grid-column: 3 / 4;
  
  @media (max-width: 619px) {
    grid-column: 1 / 4;
  }
`;

export const SubmitButton = styled.button`
  color: #1AEF22;
  font-weight: 300;
  font-size: 16px;
  height: 100%;
  width: 100%;
  border: 1px solid #1AEF22;
  outline: 0 !important;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Helvetica Neue";
  border-radius: 0;
  transition-duration: .3s;
  
  &:hover {
    background-color: rgba(26, 239, 34, .2);
    cursor: pointer;
  }
`;

export const globalStyles = injectGlobal`
  #archive-create {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    
    @media (max-width: 619px) {
        grid-template-rows: 60px 1fr;
    }
  }
`;
