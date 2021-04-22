import React, { useContext } from 'react';
import { ContentList, ProductImg, ProductTitle } from './StyleContent';
import { GlobalContext } from '../../Contexts/GlobalState';

const ProductContents = () => {
  const { query } = useContext(GlobalContext);
  return (
    <div data-testid="card">
      {query? query.map((product, index) => {
        const uniqueKey = `${product}${index}`;
        return (
          <ContentList key={uniqueKey} >
            <ProductImg src={product.src} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductTitle> Colour: {product.colors.length}</ProductTitle>
            <ProductTitle>£{product.price}</ProductTitle>
          </ContentList>
        );
      }): []}
    </div>
  );
};

export default ProductContents;
