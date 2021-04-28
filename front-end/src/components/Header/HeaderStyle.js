import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderNav = styled.div`
    display: flex;
    height: 100px;
    background-color: #2e2c2c;
    margin-bottom: 30px;
    border-bottom: 1px black;
    box-shadow: 20 black;
    align-items: center;

`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  // justify-content: flex-end;
`;
export const HeaderList = styled.li`
  list-style-type: none;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-right: 0.8rem;
`;
export const AnchorItem = styled(Link)`
list-style-type: none;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-right: 0.8rem;
`;
