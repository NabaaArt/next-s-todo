"use client";

import { Container } from "../container/container";
import styles from "./header.module.css";
import Image from "next/image";

export const Header=()=>{
    return (

        <header className={styles.header}>
     <Container> 
        <div className={styles.content}>
        <Image src={"next.svg"} width={100} height={100} />
          <ul>
            <li>
              <a className={styles.active} href="/">
                Home
              </a>
            </li>
            <li>
             <link rel="./" href="" >About</link>
            </li>
          </ul>
        </div>
        </Container>

        </header>
    )
}