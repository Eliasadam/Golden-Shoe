import React, {useContext} from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';

const Sale = () => {
    const { clicked, query, setQuery, setClicked } = useContext(GlobalContext);
    const saleHandleChange = (e) => {
        const filterOnSale = query ? query.filter(items => items.sale) : [];
        console.log(filterOnSale);
        setQuery(filterOnSale);

        setClicked(e.target.value);
    };
    return (
         <HeaderList type="submit" value={clicked} onClick={saleHandleChange}>Sale</HeaderList>   
    );
};

export default Sale;
