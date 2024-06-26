"use client";
import styles from "~/styles/homepage.module.css";
import Image from "next/image"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.texto}>
        <h2>Descubra como o EstoqueFlex pode transformar sua empresa!</h2>
        <h3> Com nosso sistema simplificado, você controlará seu estoque com facilidade, economizando tempo e dinheiro ao evitar desperdícios. Experimente a eficiência do EstoqueFlex e veja a diferença!</h3>
        <button className="botao">Fale Conosco</button>
        <h2>Por que usar um sistema de gestão de estoque?</h2>
        <h3>Controlar o estoque pode ser uma tarefa desafiadora, mas com um sistema de gestão de estoque, tudo fica muito mais fácil e rápido. E como diz o ditado popular: tempo é dinheiro.</h3>
      </div> 
        <div className={styles.boxes}>
            <div className={styles.box1}>
                <div className={styles.b}>
                  <Image className={styles.imgs} src="/imagens/image1.png" width={64} height={64} alt="image1"/>
                  <h4>Economize Tempo e Dinheiro</h4>
                </div>
              <li><p>Um sistema de estoque automatiza tarefas manuais, permitindo que você se dedique mais ao crescimento do seu negócio.  </p></li>
              <li><p>Reduz erros humanos, garantindo uma gestão mais precisa e eficiente.</p></li>
            </div>
            <div className={styles.box1}>
                <div className={styles.b}>
                  <Image className={styles.imgs} src="/imagens/image2.png" width={64} height={64} alt="image2"/>
                  <h4>Melhore Suas Decisões de Compra</h4>
                </div>
              <li><p>Com dados precisos sobre o seu estoque, você pode negociar melhor com seus fornecedores.</p></li>
              <li><p>Evite compras excessivas ou insuficientes, otimizando seus recursos financeiros.</p></li>
            </div>
            <div className={styles.box1}>
                <div className={styles.b}>
                <Image className={styles.imgs} src="/imagens/image3.png" width={64} height={64} alt="image3"/>
                <h4>Identifique Produtos Parados</h4>
                </div>
              <li><p>Monitore as entradas e saídas para saber exatamente quais produtos estão parados no estoque.</p></li>
              <li><p>Produtos parados representam dinheiro parado ou perdido, além de gerar desperdício.</p></li>
            </div>
            <div className={styles.box1}>
                <div className={styles.b}>
                  <Image className={styles.imgs} src="/imagens/image4.png" width={64} height={64} alt="image4"/>
                  <h4>Identifique Produtos Parados</h4>
                </div>
              <li><p>Monitore as entradas e saídas para saber exatamente quais produtos estão parados no estoque.</p></li>
              <li><p>Produtos parados representam dinheiro parado ou perdido, além de gerar desperdício.</p></li>
            </div>
            <div className={styles.box1}>
                <div className={styles.b}>
                  <Image className={styles.imgs} src="/imagens/image5.png" width={64} height={64} alt="image5"/>
                  <h4>Evite a Falta de Produtos Importantes</h4>
                </div>
              <li><p>Configure alertas de estoque mínimo para saber quando repor seus produtos.</p></li>
              <li><p>Garanta que itens essenciais estejam sempre disponíveis, evitando a perda de vendas.</p></li>
            </div>
        </div>
        <div className={styles.footer}>
          <Image src="/imagens/imgfooter.png" width={303} height={64} alt="footer"/>
        </div>
  </main>
  );
}
