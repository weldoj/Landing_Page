"use client";
import { useState } from "react";
import styles from "~/styles/saidas.module.css";

export function Saidas() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ext}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
          Selecione um Item{" "}
          <img className={styles.seta} src="/imagens/setabaixo.png" />
        </button>
        <div
          className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
        >
          <h3 className={styles.selecione}>Selecione um Item</h3>
          <a className={styles.opcoes} href="#ultimaSemana">
            Última semana
          </a>
          <a className={styles.opcoes} href="#ultimos12Dias">
            Ultimos 15 dias
          </a>
          <a className={styles.opcoes} href="#ultimoMes">
            Último mês
          </a>
          <a className={styles.opcoes} href="#ultimoTrimestre">
            Último trimestre
          </a>
          <a className={styles.opcoes} href="#ultimoSemestre">
            Último semestre
          </a>
          <a className={styles.opcoes} href="#ultimoAno">
            Último ano
          </a>
        </div>
      </div>
      <input className={styles.inputsaida} type="number" placeholder="Quantidade" />
      <button className={styles.filtro}>FILTRAR</button>
    </div>
  );
}
