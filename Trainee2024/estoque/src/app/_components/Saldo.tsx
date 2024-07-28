"use client";
import { useState } from "react";
import styles from "~/styles/saldo.module.css";

export function Saldo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ext}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
          Selecione um item{" "}
          <img className={styles.seta} src="/imagens/setabaixo.png" />
        </button>
        <div
          className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
        >
          <h3 className={styles.selecione}>Selecionar</h3>
          <a className={styles.opcoes} href="#Item1">
            Item1
          </a>
          <a className={styles.opcoes} href="#Item2">
            Item2
          </a>
          <a className={styles.opcoes} href="#Item3">
            Item3
          </a>
        </div>
      </div>
      <button className={styles.filtro}>FILTRAR</button>
    </div>
  );
}
