import Image from "next/image";
import styles from "~/styles/nav.module.css";
import Link from "next/link";

export function Nav() {
  return (
    <div className={styles.nav}>
      <Image
        className={styles.imglogo}
        src="/imagens/imgfooter.png"
        width={350}
        height={64}
        alt="logo"
      />
      <ul className={styles.links_nav}>
        <Link href="Produtos">Inicio</Link>
        <Link href="Login">Conta </Link>
      </ul>
      <div className={styles.retangulo_nav}></div>
    </div>
  );
}
