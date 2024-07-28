"use client";
import { useState } from "react";
import styles from "~/styles/venda.module.css";

export function Venda() {
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
            Produtos mais vendidos
          </a>
          <a className={styles.opcoes} href="#ultimos12Dias">
            Produtos menos vendidos
          </a>
          <a className={styles.opcoes} href="#ultimoMes">
            Produtos sem estoque
          </a>
        </div>
      </div>
      <button className={styles.filtro}>FILTRAR</button>
    </div>
  );
}
