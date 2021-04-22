import React, {useContext} from 'react';
import { HeaderList } from './HeaderStyle';
import { GlobalContext } from '../../Contexts/GlobalState';

const NewRelease = () => {
    const {
        query, clicked, setQuery,
        setClicked
    } = useContext(GlobalContext);

    const HandleChange = (e) => {
        const filteredProduct = query? 
            query.filter((items) => items.newRelease) : [];
        console.log(filteredProduct);
       
        setQuery( filteredProduct);
        setClicked(e.target.value); 
    };
   
    return (
   
        <HeaderList type="submit" value={clicked} onClick={HandleChange}>
            New Release
        </HeaderList>
    );
};

export default NewRelease;
