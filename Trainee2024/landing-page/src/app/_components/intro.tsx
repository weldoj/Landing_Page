import introStyles from "~/styles/intro.module.css";
import Image from 'next/image'

export function Intro() {
    return (
        <div className={introStyles.intro}>
            <div className={introStyles.introText}>
                <p className={introStyles.introP1}>Gerencie seu estoque de forma eficiente e sem complicações! Nosso sistema online facilita seu dia a dia, economiza tempo e minimiza desperdícios
                </p>
                <p className={introStyles.introP2}>
                    Experimente a simplicidade e a eficácia de um controle de estoque inteligente
                </p>

            </div>
            <div className={introStyles.introImg}>
                <Image
                    src="/Mockup.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                />
            </div>
        </div>

    );
}