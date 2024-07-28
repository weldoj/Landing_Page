import { Nav } from "../_components/navbar";
import { Links } from "../_components/links";
import { Produtos } from "../_components/Produtos";
import styles from "~/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.corpo}>
          <Links />
          <Produtos />
        </div>
      </div>
    </main>
  );
}
