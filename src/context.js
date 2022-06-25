import { useState, createContext, useContext } from 'react';

const initialState = {
    loading: true,
    data: null
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(initialState.loading);
    const [data, setData] = useState(initialState.data);

    const memoedState = () => {
        return {
            loading,
            setLoading,
            data
        }
    }

    return (
        <AppContext.Provider value={memoedState}>
            {children}
        </AppContext.Provider>
    )
}

const useApp = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useApp }