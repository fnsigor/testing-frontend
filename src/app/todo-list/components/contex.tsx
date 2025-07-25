"use client";

import { createContext, useContext, useState } from "react";

// Interface para os itens da lista
interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
}

export const TodoListContext = createContext<{
  items: TodoItem[];
  addItem: (text: string) => void;
  removeItem: (index: number) => void;
  toggleItem: (index: number) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  toggleItem: () => {},
});


export const TodoListProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const addItem = (text: string) => {
    const newItem: TodoItem = {
      id: Date.now().toString(),
      text: text,
      checked: false
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const toggleItem = (index: number) => {
    setItems(items.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };


  return (
    <TodoListContext.Provider value={{ items, addItem, removeItem, toggleItem }}>
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
