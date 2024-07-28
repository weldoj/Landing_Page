import { Nav } from "../_components/navbar";
import { Links } from "../_components/links";
import styles from "~/styles/index.module.css";

export default function Extrato() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.corpo}>
        <Links />
      </div>
    </main>
  );
}
