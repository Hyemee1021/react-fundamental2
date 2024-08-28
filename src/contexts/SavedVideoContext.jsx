import { Children, createContext, useEffect, useState } from "react";

const SavedContext = createContext(null);

export function SavedListProvider({ children }) {
  const [savedList, setSavedList] = useState([]);

  return <SavedContext.Provider value={{}}>{children}</SavedContext.Provider>;
}

export default SavedContext;
