import React, {useContext} from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';


const Men = () => {

const { query, clicked, setClicked, setQuery } = useContext(GlobalContext);
const menHandleChange = (e) => {
    const filterMenShoe = query ?
        query.filter((items) => items.kids) : [];
    console.log(filterMenShoe);
   
    setQuery(filterMenShoe);
    setClicked(e.target.value);
};
    return (
        <HeaderList type="submit" value={clicked} onClick={menHandleChange}>Men</HeaderList>
    );
};

export default Men;
