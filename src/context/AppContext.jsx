"use client";

import { createContext, useRef, useState } from "react";

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    profile: useRef(null),
    skill: useRef(null),
    contact: useRef(null),
  };
  const showModalToggle = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <AppContext.Provider
      value={{
        showModal,
        showModalToggle,
        sectionRefs
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };

export default AppContext;
