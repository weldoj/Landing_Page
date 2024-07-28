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
        <Link href="#Inicio"><img className={styles.imgcasa} src="/imagens/casaestoque.png" alt="" />Inicio</Link>
        <Link href="#Conta"><img className={styles.conta} src="/imagens/perfilestoque.png" alt="" />Conta</Link>
      </ul>
      <div className={styles.retangulo_nav}></div>
    </div>
  );
}
