import React from 'react';
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingCart = styled(ShoppingCartIcon)`
display: flex;
color: white;

`;
const ShoppingBasket = () => {
    return (
        <div>
            <ShoppingCart />
        </div>
    );
};

export default ShoppingBasket;