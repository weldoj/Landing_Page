import styles from "~/styles/homepage.module.css";
import Image from "next/image";
import { dados_quadradinhos } from "../lib/dados_quadradinhos";

export function Quadradinhos() {
  return (
    <div id="#Benefícios" className={styles.main}>
      <div className={styles.texto}>
        <h2>Descubra como o EstoqueFlex pode transformar sua empresa!</h2>
        <h3>
          Com nosso sistema simplificado, você controlará seu estoque com
          facilidade, economizando tempo e dinheiro ao evitar desperdícios.
          Experimente a eficiência do EstoqueFlex e veja a diferença!
        </h3>
        <button className={styles.botao}>Fale Conosco</button>
        <h2>Por que usar um sistema de gestão de estoque?</h2>
        <h3>
          Controlar o estoque pode ser uma tarefa desafiadora, mas com um
          sistema de gestão de estoque, tudo fica muito mais fácil e rápido. E
          como diz o ditado popular: tempo é dinheiro.
        </h3>
      </div>
      <div className={styles.boxes}>
        {dados_quadradinhos.map((dado, index) => (
          <div key={index} className={styles.box1}>
            <div className={styles.b}>
              <Image
                className={styles.imgs}
                src={dado.imagem}
                width={64}
                height={64}
                alt="image1"
              />
              <h4>{dado.titulo}</h4>
            </div>
            <ul>
              <li>
                <p>{dado.paragrafo1}</p>
              </li>
              <li>
                <p>{dado.paragrafo2}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
