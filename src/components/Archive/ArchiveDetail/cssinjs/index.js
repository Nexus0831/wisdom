// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

// styled component
export const MyContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
`;

export const globalStyles = injectGlobal`
  #archive-detail {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    height: 100%;
  }
`;
