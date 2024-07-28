"use client"
import { useState } from 'react';
import styles from "~/styles/DropdownMenu.module.css";
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={toggleMenu}>Selecione um item <img className={styles.seta} src="/imagens/setabaixo.png" alt="seta" /></button>
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          <h3 className={styles.selecione}>Selecione um item</h3>
          <a className={styles.opcoes} href="#opcao1">Opção 1</a>
          <a className={styles.opcoes} href="#opcao2">Opção 2</a>
          <a className={styles.opcoes} href="#opcao3">Opção 3</a>
        </div>
      </div>
    );
  };
  
  export default DropdownMenu;