// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

// styled component

export const SearchForm = styled.div`
  width: 100%;
  height: 60px;
`;

export const MyContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  
  //@media (max-width: 619px) {
  //  
  //}
  //@media (min-width: 620px) { 
  //
  //}
  //
  //@media (min-width: 768px) { 
  //
  //}
  //
  //@media (min-width: 1140px) {
  //  padding-left: 20px;
  //  padding-right: -20px;
  //}
`;

export const MyGrid = styled.div`
  display: grid;
  
  @media (max-width: 619px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  
  @media (min-width: 620px) { 
    grid-template-columns: 49% 49%;
    grid-row-gap: 16px;
    grid-column-gap: 2%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 32% 32% 32%;
    grid-row-gap: 20px;
    grid-column-gap: 2%;
  }
`;

export const ArchiveCard = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #FFFFFF;
  
  &:hover {
    //background-color: rgba(255, 255, 255, .2);
    box-shadow: 0 0 20px 5px rgba(255,255,255,.3) inset;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  color: #FFFFFF;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  height: 40px;
`;

export const CreateDate = styled.div`
  font-family: "Helvetica Neue";
  font-weight: 200;
  font-size: 15px;
  color: #FFFFFF;
  padding-left: 10px;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  height: 85px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-rows: 10px 1fr 5px;
  grid-template-columns: 1fr 100px 10px 100px 10px;
  //grid-template-areas:
  //      "..... ..... ..... ......"
  //      "..... edit ...... delete"
  //      "..... ..... ..... ......";
  width: 100%;
  height: 50px;
`;

export const Button = styled.button`
  ${props => props.row ? 'grid-row:' + props.row : ''};
  ${props => props.column ? 'grid-column:' + props.column : ''};  
  color: ${props => props.danger ?  '#EF331A' : '#1AEF22'};
  font-weight: 300;
  font-size: 16px;
  height: 35px;
  width: 100px;
  border: 1px solid ${props => props.danger ?  '#EF331A' : '#1AEF22'};
  outline: 0 !important;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Helvetica Neue";
  border-radius: 0;
  
  &:hover {
    background-color: ${props => props.danger ?  'rgba(239, 51, 26, .2)' : 'rgba(26, 239, 34, .2)'};
    cursor: pointer;
  }
`;

export const globalStyles = injectGlobal`
  #home {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    
    @media (max-width: 619px) {
        grid-template-rows: 60px 1fr;
    }
  }
`;
