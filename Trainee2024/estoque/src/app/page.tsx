"use client"
import Link from "next/link";


import styles from "./index.module.css";
import { SingUp } from "./login/_components/singup";
import AuthComponent from '../components/AuthComponent';
import { ButtonSignOut } from "./login/_components/singout";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  if (session) {
    return (
      <main className={styles.main}>
        <div className={styles.account}>
            { session.data?.user.name? 
            <div>
              <p>Bem vindo {session.data?.user.name}!</p>
              <ButtonSignOut/>
            </div>
            :
            <div>
              <p> Opa, parece que você não está cadastrado </p> 
              <p><Link href={'/login'}>Cadastre-se</Link></p>
            </div>
            }
        </div>
      </main>
    );
  }
}
