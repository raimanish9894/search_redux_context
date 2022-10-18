import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "CSS",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    

    const fetchApiData = async(url) => {

        dispatch({
            type: "SET_LOADING",
        })
      try {
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(data);
        // isLoading = false;
        dispatch({ 
            type: "GET_STORY",
            payload: {
                hits: data.hits,
                nbPages: data.nbPages,
            }
        })
      } catch (error) {
        console.log(error);
      }
    }

    const removePost = (story_ID) => {
      dispatch({
        type: "REMOVE_STORY",
        payload: story_ID,
      })
    };

    const searchStory = (searchQuery) => {
      dispatch({
        type: "SEARCH",
        payload: searchQuery
      })
    }

    const getPreviousPage = () => {
      dispatch({
        type: "PREV_PAGE"
      })
    }

    const getNextPage = () => {
      dispatch({
        type: "NEXT_PAGE"
      });
    };
  
    useEffect(()=>{
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query, state.page]);

    return <AppContext.Provider value={{ ...state, removePost, searchStory, getNextPage, getPreviousPage }}>{ children }</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext, };