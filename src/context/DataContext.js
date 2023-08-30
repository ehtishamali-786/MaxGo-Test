// create a context
// provider
// consumer => useContext Hook

import axios from "axios";
import { useReducer } from "react";
import { useContext, createContext, useEffect, useState } from "react";
// import reducer from "../reducrer/productReducer";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const [isActive, setIsActive] = useState(false)

    const handleActive=()=>{
        setIsActive(true)
    }



    const getProperty=async()=>{
        const resp = await axios.get(`${process.env.REALSTATE_MOCK_API}`)
                 console.log(resp)

    }
    return (
        <DataContext.Provider
            value={{
                getProperty,
                handleActive,
                isActive
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// custom hooks

const useDataContext = () => {
    return useContext(DataContext);
};

export { DataContextProvider, DataContext, useDataContext };