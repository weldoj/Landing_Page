"use client"
import React from "react"
import { signIn } from "next-auth/react"


export function SingUp() {
  return (
    <div>
      <button onClick={() =>
        signIn("google", {callbackUrl: "/"})
      }>Cadastrar com Google </button> 
    </div>
  )
}
