import { createContext, useState } from "react";
import { TYPES } from "../constants/constants";
import { randomFunction } from "../utils/randomFunction";
import React from "react";

type ContextType = {
  data: any[];
  handleData: (value: any) => void;
  setData: any;
};

export const Context = createContext<ContextType>({
  data: [],
  handleData: () => {},
  setData: () => {},
});

export const AppContext = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [data, setData] = useState<any>([
    {
      id: randomFunction(),
      type: TYPES.FOLDER,
      name: `Folder ${String(randomFunction()).slice(1, 3)}`,
    },
    {
      id: randomFunction(),
      type: TYPES.FILE,
      name: `File ${String(randomFunction()).slice(1, 3)}`,
    },
  ]);
  const handleData = (value: any) => {
    setData((prev: any) => [...prev, value]);
  };
  const contextValue = React.useMemo(
    () => ({ data, handleData, setData }),
    [data]
  );
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AppContext;
