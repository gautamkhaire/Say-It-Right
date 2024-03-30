"use client";
import { createContext, useState } from "react";

interface ISidebar{
  expanded: boolean;
  setExpanded: (state: boolean) => void;
  selected: string;
  setSelected: (state: string) => void;
}
export const SidebarContext = createContext<ISidebar | undefined>(undefined);

export const SidebarProvider = ({ children }: any) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [selected,setSelected] = useState<string>('Statistics');
  return (
    <SidebarContext.Provider value={{ expanded, setExpanded,selected,setSelected }}>
      {children}
    </SidebarContext.Provider>
  );
};
