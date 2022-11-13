import React, { createContex, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

const initialState = {
    mylist: [],
};

export const GlobalContext = createContex(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addMovieToMyList = item => {
        dispatch({type: "ADD_MOVIE_TO_MYLIST", payload: item });
    }

    return (
        <GlobalContext.Provider 
            value={{mylist: state.mylist, addMovieToMyList}}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}