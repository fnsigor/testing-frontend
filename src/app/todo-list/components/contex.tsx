"use client";

import { createContext, useContext, useState } from "react";

export const TodoListContext = createContext<{
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});


export const TodoListProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };


  return (
    <TodoListContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </TodoListContext.Provider>
  );
}

export const useTodoList = () => {
  const context = useContext(TodoListContext);

  if (!context) {
    throw new Error("useTodoList must be used within a TodoListProvider");
  }

  return context;
};
