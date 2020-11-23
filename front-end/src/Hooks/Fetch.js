import React, { useState, useEffect } from 'react';

export default function Fetch() {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    
   
    useEffect(() => {
        async function FetchShoeData() {
            const response = await fetch("https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/");
            response.json().then(res => setData(res)).then(error => setError(error));
        }
        FetchShoeData();
    }, []);
    
    return (
        <div>
            <p>{error}</p>
            <p>{JSON.stringify(data)}</p>

        </div>
    );
}

