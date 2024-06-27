import styles from "~/styles/Funcionalidades.module.css"

export default function Home() {
  return (
    <section className={styles.section_funcionalidades}>
      <h2>Funcionalidades</h2>
      <div className={styles.funcionalidades}>
        <div className={styles.funcionalidade}> 
          <img src="/product managment.webp" alt="" />
          <div className={styles.texto}>
            <h3>Gestão de produtos</h3>
            <p>Gerencie seus produtos com facilidade</p>
          </div>
        </div>
        <div className={styles.funcionalidade}>
          <div className={styles.texto}>
            <h3>Entradas e saídas</h3>
            <p>Controle todas as entradas e saídas com facilidade. Nosso sistema atualiza automatciamente o saldo do estoque conforme você faz movimentações. Tenha sempre uma visão precisa e atualizada do seu inventário, sem complicações.</p>
          </div>
          <img src="/Entradas e saidas.png" alt="" />
        </div>
        <div className={styles.funcionalidade}>
          <img src="/pagina de extrato.jpg" alt="" />
          <div className={styles.texto}>
            <h3>Página de Extrato</h3>
            <p>Acompanhe todas as movimentações do seu estoque em um só lugar. Nosso extrato detalhado oferece uma visão clara das entradas e saídas, garantindo que você tenha sempre o controle total do seu inventário.</p>
          </div>
        </div>
        <div className={styles.funcionalidade}>
          <div className={styles.texto}>
            <h3>Acesse de Qualquer Lugar com Internet</h3>
            <p>Tenha o controle do seu estoque na palma da sua mão. Com nosso sistema on-line, você pode acessar todas as funcionalidades de qualquer lugar, bastando apenas ter uma conexão à internet e um navegador.</p>
          </div>
          <img src="/acesse de qualquer lugar.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
