import styles from "~/styles/homepage.module.css"
import Image from "next/image"

export function Footer(){
    return(
        <div className={styles.footer}>
        <Image src="/imagens/imgfooter.png" width={303} height={64} alt="footer"/>
        </div>
    )
}