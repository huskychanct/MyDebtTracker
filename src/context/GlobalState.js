import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial State

const initialState = {
    payments: [
        { id: 1, date: '1/1/2020', amount: 20 },
        { id: 2, date: '1/2/2020', amount: 300 },
        { id: 3, date: '1/3/2020', amount: 10 },
        { id: 4, date: '1/4/2020', amount: 150 }
    ]
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        payments:state.payments
    }}>
        { children }
    </GlobalContext.Provider>);
}