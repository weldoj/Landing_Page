import styles from "~/styles/produtos.module.css";

export function Produtos() {
  return (
    <div className={styles.pesquisa}>
      <input type="text" />
      <button>Cadastrar</button>
    </div>
  );
}
