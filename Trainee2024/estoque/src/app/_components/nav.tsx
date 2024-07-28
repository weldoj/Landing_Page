import Image from "next/image";
import styles from "~/styles/nav.module.css";
import Link from "next/link";

export function Nav() {
    return (
        <div className={styles.nav}>
            <Image
                className={styles.imglogo}
                src="/imagens/estoqueflex.png"
                width={350}
                height={64}
                alt="logo"
            />
        </div>
    )
}
