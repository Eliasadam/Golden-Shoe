import React from 'react';

const ProductContents = ({ query }) => {
  return (
    <div>
      {query.map((product, index) => {
        const uniqueKey = `${product}${index}`;
        return (
          <div key={uniqueKey}>
            <img src={product.src} />
            <p>{product.title}</p>
            <p> Colour: {product.colors.length}</p>
            <p>£{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductContents;
