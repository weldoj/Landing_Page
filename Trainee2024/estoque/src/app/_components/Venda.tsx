"use client";
import { useState } from "react";
import styles from "~/styles/venda.module.css";

export function Venda() {
  const [isOpen, setIsOpen] = useState(false);
  const [selecionado, setSelecionado] = useState<string>("Filtrar por");

  const handleOptionClick = (option: string) => {
    setSelecionado(option);
    setIsOpen(false); // Fechar o dropdown após a seleção
  };

  return (
    <div className={styles.ext}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
          {selecionado}
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
            href="#maisVendidos"
            onClick={() => handleOptionClick("Produtos mais vendidos")}
          >
            Produtos mais vendidos
          </a>
          <a
            className={styles.opcoes}
            href="#menosVendidos"
            onClick={() => handleOptionClick("Produtos menos vendidos")}
          >
            Produtos menos vendidos
          </a>
          <a
            className={styles.opcoes}
            href="#semEstoque"
            onClick={() => handleOptionClick("Produtos sem estoque")}
          >
            Produtos sem estoque
          </a>
        </div>
      </div>
      <button className={styles.filtro}>FILTRAR</button>
    </div>
  );
}
