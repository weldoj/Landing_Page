import Link from "next/link";
import styles from "~/styles/links.module.css";

export function Links() {
  return (
    <div>
      <ul className={styles.links}>
        <li>
          <p>CADASTRO</p>
          <Link href="Produtos">PRODUTOS </Link>
        </li>
        <li>
          <p>ESTOQUE</p>
          <Link href="Saldo">SALDO</Link>
        </li>
        <li>
          <Link href="Entradas">ENTRADAS</Link>
        </li>
        <li>
          <Link href="Saidas">SAIDAS </Link>
        </li>
        <li>
          <Link href="Venda">VENDA </Link>
        </li>
        <li>
          <Link href="Extrato">EXTRATO </Link>
        </li>
      </ul>
    </div>
  );
}
