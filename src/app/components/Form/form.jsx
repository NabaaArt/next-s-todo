"use client";

import { useState } from "react";
import styles from "./form.module.css"
import { Container } from "../container/container";
import { useStore } from "../../../store";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = useStore();

  const handleAdd = () => {
    let newObj = {
      id: 10,
      todo: newTodo,
    };

    let newList = [...todos, newObj];
    setTodos(newList);
    setNewTodo("");
  };

  return (
    <div className={styles.formBox}>
   
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Write Text here . . ."
      />
      <button onClick={handleAdd}>+ Add New</button>
     
    </div>
    
  );
};

export default Form;