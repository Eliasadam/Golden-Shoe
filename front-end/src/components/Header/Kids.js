import React, {useContext} from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';

const Kids = () => {
    const { query, clicked, setClicked, setQuery } = useContext(GlobalContext);
    const HandleChange = (e) => {
        const filterKidsPro = query ?
            query.filter((items) => items.kids) : [];
       
        setQuery(filterKidsPro);
        setClicked(e.target.value);
    };
    return (
        <HeaderList type="submit" value={clicked} onClick={HandleChange}>Kids</HeaderList>
    );
};

export default Kids;
