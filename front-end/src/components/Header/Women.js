import React, {useContext} from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';

const Women = () => {
    const {
        query, clicked, setQuery,
        setClicked
    } = useContext(GlobalContext);

    const HandleChange = (e) => {
        const filterWomenShoe = query? 
            query.filter((items) => items.women) : [];
        console.log(filterWomenShoe);
       
        setQuery( filterWomenShoe);
        setClicked(e.target.value); 
    };
    return (
        <HeaderList type="submit" value={clicked} onClick={HandleChange}>Women</HeaderList>
    );
};

export default Women;
