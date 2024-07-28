"use client";
import Link from "next/link";
import { Nav } from "./_components/navbar";
import { Links } from "./_components/links";
import { Produtos } from "./_components/Produtos";
import styles from "../styles/index.module.css";
import { ButtonSignOut } from "./login/_components/singout";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  if (session) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Nav />
          <div className={styles.corpo}>
            <div>
              {session.data?.user.name ? (
                <h1>Bem vindo {session.data?.user.name}</h1>
              ) : (
                <Link href={"/login"}>Cadastro</Link>
              )}
              {<h1>Bem vinda</h1> && session.data?.user.name && (
                <ButtonSignOut />
              )}
            </div>
            <Links />
            <Produtos />
          </div>
        </div>
      </main>
    );
  }
}
