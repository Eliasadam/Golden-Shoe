import React, {useContext} from 'react';
import { ContentList, ProductImg, ProductTitle, ContentWrapper } from '../ProductContents/StyleContent';
import { GlobalContext } from '../../Contexts/GlobalState';

const NewRelease = () => {
    const {
        query,
    } = useContext(GlobalContext);

    
        const filteredProduct = query? 
            query.filter((items) => items.newRelease) : [];
        console.log(filteredProduct);
  
   
    return (
        
        <ContentWrapper data-testid="card">
      {filteredProduct? filteredProduct.map((product, index) => {
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
    </ContentWrapper>
            
       
    );
};

export default NewRelease;