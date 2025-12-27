// components/Loading/LoadingProvider.jsx
'use client';

import { createContext, useContext, useState } from "react";
import Loading from "../Loading/Loading";

const LoadingContext = createContext();

export const useLoadingState = () => useContext(LoadingContext);

export default function LoadingProvider({ children }) {
  const [loaderHiding, setLoaderHiding] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <LoadingContext.Provider value={{ loaderHiding, loaderFinished }}>
      <Loading
        onHide={() => setLoaderHiding(true)}
        onFinish={() => setLoaderFinished(true)}
      />
      {children}
    </LoadingContext.Provider>
  );
}
