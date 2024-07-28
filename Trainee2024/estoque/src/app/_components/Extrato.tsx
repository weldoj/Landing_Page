"use client";
import { useState } from "react";
import styles from "~/styles/extrato.module.css";

export function Ext() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3>Extrato</h3>
      <button onClick={toggleMenu}>Filtrar por</button>
      <div className={`${isOpen ? styles.open : ""}`}>
        <a href="teste1">Opção 1</a>
        <a href="teste2">Opção 2</a>
        <a href="teste3">Opção 3</a>
      </div>
    </div>
  );
}
