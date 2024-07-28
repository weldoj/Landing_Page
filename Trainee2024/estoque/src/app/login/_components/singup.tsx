"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { signIn } from "next-auth/react"


export function SingUp() {
  return (
    <div>
      <button onClick={() => signIn('discord', {callbackUrl: "/"})}>Cadastrar com Discord </button> 
    </div>
  )
}
