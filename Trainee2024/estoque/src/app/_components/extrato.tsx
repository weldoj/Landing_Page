"use client";
import { useState } from "react";
import styles from "~/styles/extrato.module.css";

export function Extratos() {
  const [isOpen, setIsOpen] = useState(false);
  const [selecionado, setSelecionado] = useState("Filtrar por");

  const handleSelect = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: string
  ) => {
    event.preventDefault();
    setSelecionado(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.ext}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
          {selecionado}{" "}
          <img
            className={styles.seta}
            src="/imagens/setabaixo.png"
            alt="Seta para baixo"
          />
        </button>
        <div
          className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
        >
          <h3 className={styles.selecione}>Filtrar por</h3>
          <a
            className={styles.opcoes}
            href="#ultimaSemana"
            onClick={(e) => handleSelect(e, "Última semana")}
          >
            Última semana
          </a>
          <a
            className={styles.opcoes}
            href="#ultimos12Dias"
            onClick={(e) => handleSelect(e, "Últimos 15 dias")}
          >
            Últimos 15 dias
          </a>
          <a
            className={styles.opcoes}
            href="#ultimoMes"
            onClick={(e) => handleSelect(e, "Último mês")}
          >
            Último mês
          </a>
          <a
            className={styles.opcoes}
            href="#ultimoTrimestre"
            onClick={(e) => handleSelect(e, "Último trimestre")}
          >
            Último trimestre
          </a>
          <a
            className={styles.opcoes}
            href="#ultimoSemestre"
            onClick={(e) => handleSelect(e, "Último semestre")}
          >
            Último semestre
          </a>
          <a
            className={styles.opcoes}
            href="#ultimoAno"
            onClick={(e) => handleSelect(e, "Último ano")}
          >
            Último ano
          </a>
        </div>
      </div>
      <a className={styles.botaofiltro} href="#Filtrar">
        <button className={styles.filtro}>FILTRAR</button>
      </a>
    </div>
  );
}
