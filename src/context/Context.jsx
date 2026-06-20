import { createContext } from "react";
import generateResponse from "../config/gemini";

export const Context = createContext();

export const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    const response = await generateResponse(prompt);
    console.log(response);
  };

  onSent("What is React?");

  const contextValue = {
    // Your context values here
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
