import { Nav } from "../_components/navbar";
import { Links } from "../_components/links";
import { Entradas } from "../_components/Entradas";
import styles from "~/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.corpo}>
          <Links />
          <Entradas />
        </div>
      </div>
    </main>
  );
}
