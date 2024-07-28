import { Nav } from "../_components/navbar";
import { Links } from "../_components/links";
import { Extratos } from "../_components/extrato";
import styles from "~/styles/index.module.css";

export default function Extrato() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.corpo}>
          <Links />
          <Extratos />
        </div>
      </div>
    </main>
  );
}
