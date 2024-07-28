"use client";
import { signOut } from "next-auth/react";
export function ButtonSignOut() {
  return (
    <button
      onClick={() => signOut()}
    >
      Sair
    </button>
  );
}
