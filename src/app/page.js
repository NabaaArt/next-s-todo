"use client";

import { Header } from "./components/Header/header";
import { useStore } from "../store";
import Image from "next/image";
import Form from "./components/Form/form";
import TaskCard from "./components/taskCard/taskCard";
import styles from './page.module.css'
import { Container } from "./components/container/container";
export default function Home() {
  const { todos, setTodos } = useStore();

  const handleDelete = (todo) => {
    setTodos(todos.filter((el) => el.todo !== todo));
  };

  return (
    <main className={styles.home}>

      {/* <Image src={"next.svg"} width={100} height={100} /> */}
      <Header />
      <Container> 
      <h1 className={styles.title}>Simple ToDo App</h1>
        <p className={styles.desc}>This todo app for test design.</p>
     <Form/>
     <div className={styles.todoList}>
          {todos.map((el) => {
            return (
         < TaskCard 
                text={el.todo}
                handleDelete={() => handleDelete(el.todo)}
                />
            );
          })}
        </div>
        </Container>
    </main>
  );
}
