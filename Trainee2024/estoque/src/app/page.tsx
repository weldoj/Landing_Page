import Link from "next/link";

import styles from "./index.module.css";
import { SingUp } from "./login/_components/singup";
import AuthComponent from '../components/AuthComponent';

// export default function Home() {
//   return (
//     <main>
//       <h1>Welcome to My App</h1>
//       <AuthComponent />
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Página de Login</h1>
        <SingUp/>
    </main>
  );
}
