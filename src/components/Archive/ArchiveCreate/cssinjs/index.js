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
