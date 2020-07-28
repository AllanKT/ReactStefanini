import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

export default function StoreProvider({ children }) {
    const [token, setToken] = useStorage('token');

    return (
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    );
}