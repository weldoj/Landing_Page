import Link from "next/link";
import React from 'react';
import { Form } from "~/app/_components/form"
import { Intro } from "~/app/_components/intro"
import contatoStyles from "~/styles/contato.module.css";
import "~/styles/globals.css";

export default function Homepage() {
  return (
    <main>

      <Intro />
      <div className={contatoStyles.contato}>
        <h2 className={contatoStyles.title}>Contato</h2>

        <Form />
      </div>
    </main>
  );
}


