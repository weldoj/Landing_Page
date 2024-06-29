"use client"
import styles from "~/styles/nav.module.css"
import Image from 'next/image'
import { useState } from "react"
import Link from "next/link"

export function Nav() {
    const [Abrir, setAbrir] = useState(false)
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image
                        src="/imagens/imagelogo.png"
                        width={48}
                        height={48}
                        alt="Picture of the author"
                    />
                    <h1 className={styles.logoh1}>EstoqueFlex</h1>
                </div>
                <ul className={styles.links_4} >
                    <li><Link   href="#Início">Início </Link></li>
                    <li><Link href="#Benefícios">Benefícios</Link></li>
                    <li><Link  href="#Funcionalidades">Funcionalidades</Link></li>
                    <li><Link   href="#Contato">Contato </Link></li>
                </ul>


                <button onClick={() => setAbrir(!Abrir)} className={styles.menu} >
                    <i >
                        <Image
                            src="/imagens/menu.png"
                            width={16}
                            height={16}
                            alt="Picture of the author"
                        />
                    </i>
                </button>

            </nav>

            {Abrir &&
            <div className={styles.divmenu}>
                <ul className={styles.menulinks} >
                <li><Link   href="#Início">Início </Link></li>
                    <li><Link href="#Benefícios">Benefícios</Link></li>
                    <li><Link  href="#Funcionalidades">Funcionalidades</Link></li>
                    <li><Link   href="#Contato">Contato </Link></li>
                </ul>
            </div>
            }
        </>
    )
}

