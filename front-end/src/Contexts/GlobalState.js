import React, { createContext, useState } from 'react';
import data from './Data/ShoeCatalogueList.json';
// import AppReducer from './AppReducer';


export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [query, setQuery] = useState(data);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState('');
   
    return (
        <>
            <GlobalContext.Provider
                value={
                    {
                        query, setQuery,
                        search, setSearch, clicked, setClicked
                    }
                }
            >
                {props.children}
            </GlobalContext.Provider>
        </>
    );
};
