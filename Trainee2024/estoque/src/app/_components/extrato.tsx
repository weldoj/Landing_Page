"use client";
import { useState } from "react";
import styles from "~/styles/extrato.module.css";

export function Extratos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ext}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
          Filtrar por{" "}
          <img className={styles.seta} src="/imagens/setabaixo.png" />
        </button>
        <div
          className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
        >
          <h3 className={styles.selecione}>Filtrar por</h3>
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
      <button className={styles.filtro}>FILTRAR</button>
    </div>
  );
}
