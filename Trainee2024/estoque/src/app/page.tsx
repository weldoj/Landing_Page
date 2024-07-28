"use client";
import Link from "next/link";

import styles from "./index.module.css";
import { SingUp } from "./login/_components/singup";
import AuthComponent from "../components/AuthComponent";
import { ButtonSignOut } from "./login/_components/singout";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  if (session) {
    return (
      <main className={styles.main}>
        <div>
          {session.data?.user.name ? (
            <h1>Bem vindo {session.data?.user.name}</h1>
          ) : (
            <Link href={"/login"}>Cadastro</Link>
          )}
          {<h1>Bem vinda</h1> && session.data?.user.name && <ButtonSignOut />}
        </div>
      </main>
    );
  }
}
