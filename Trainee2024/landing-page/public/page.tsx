import React from 'react';
import { Form } from "./_components/form";
import { Intro } from "./_components/intro";
import contatoStyles from "~/styles/contato.module.css";
import  "~/styles/globals.css";

export default function Homepage() {
  return (
    <div>
        <Intro/>
      <div className={contatoStyles.contato}>
        <h2 className={contatoStyles.title}>Contato</h2>

        <Form />
      </div>
    </div>
  );
}