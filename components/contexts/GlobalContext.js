import React from "react";
export const GlobalContext = React.createContext({
    showModal: () => {},
    closeModal: () => {},
    showChoiceModal: () => {},
    closeChoiceModal: () => {},
});