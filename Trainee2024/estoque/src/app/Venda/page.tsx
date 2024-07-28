import { Nav } from "../_components/navbar";
import { Links } from "../_components/links";
import { Venda } from "../_components/Venda";
import styles from "~/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.corpo}>
          <Links />
          <Venda />
        </div>
      </div>
    </main>
  );
}
