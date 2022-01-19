import React, { createContext, useContext, useState } from 'react'; 

const ResultContext = createContext(); 
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'; 

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    const [searchTerm, setSearchTerm] = useState(''); 


    const getResults = async (type) => {
        setIsLoading(true); 

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '58e62e3657mshfd31f66e182cfd8p17986ejsn8f25b42c24e2'
            }
        });

        const data = await response.json(); 

        setResults(data); 
        setIsLoading(false); 
    }

    return (
        <ResultContextProvider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContextProvider>
    );
}

export const useResultContext = () => useContext(ResultContext); 