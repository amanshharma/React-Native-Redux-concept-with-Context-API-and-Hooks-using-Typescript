import React, { useReducer, createContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const myContext = createContext();

export default function Store(props) {
  const counter = 0;
  const [state, dispatch] = useReducer((state, action) => {
    console.log("state", state);
    console.log("action", action);
    return state + action;
  }, counter);
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
}