import React, { useContext } from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';


const Unisex = () => {
    const { clicked, setClicked, query, setQuery } = useContext(GlobalContext);
    const unisexHandleChange = (e) => {
        const filterUnisexShoe = query ? query.filter(items => items.unisex) : [];
        setQuery(filterUnisexShoe);
        setClicked(e.target.value);
    };
    
    return (
        <HeaderList type="submit" value={clicked} onClick={unisexHandleChange} >Unisex</HeaderList>
    );
};

export default Unisex;