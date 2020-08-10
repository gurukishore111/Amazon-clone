//setup data layer

//We need this too track the basket

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
