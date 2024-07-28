'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Logar como {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Criar login <br />
      <button onClick={() => signIn("discord")}>Logar com Discord</button>
    </>
  );
}
