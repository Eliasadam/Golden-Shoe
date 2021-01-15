import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  flex: 1;
  box-shadow: 0 4px 6px #0d506a;
  background-color: #f3feef;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 220px;
  margin: 1rem;
  padding: 0.5rem;
`;
export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5rem;
`;
export const CardTitle = styled.p`
  font-size: 12px;
  align-self: center;
  margin: 1rem;
  text-align: center;
`;
export const CardImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 0.5rem;
  border-radius: 0.2rem;
`;