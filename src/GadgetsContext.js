import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GadgetsContext = createContext();

export const LaptopProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Rohitap132/react-native-cli/db')
            .then((res) => {
                setCars(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <GadgetsContext.Provider value={{ cars, loading }}>
            {children}
        </GadgetsContext.Provider>
    );
};
