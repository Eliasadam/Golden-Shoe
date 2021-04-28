import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  padding: 0.1rem;
`;
export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;
  width: 400px;
`;
export const ProductTitle = styled.p`
  font-size: 16px;
  align-self: center;
  margin: 5px;
  text-align: center;
  font-weight: bold;
`;
export const ProductImg = styled.img`
  width: 350px;
  height: 350px;
  margin: 0.5rem;
  border-radius: 0.2rem;
`;