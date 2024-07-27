// import { useRouter } from 'next/router';
// import { signIn } from 'next-auth/react';
// import styles from './Login.module.css';

import Image from 'next/image'
import SimpleLayout from "../_components/SimpleLayout"
import styles from "~/styles/login.module.css"

// import Link from "next/link";
// import Styles from "../."
export default function Login() {
  return (
    <SimpleLayout>

      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            <Image
              src="/imagens/imagelogo.png"
              width={48}
              height={48}
              alt="Picture of the author"
            />
            <h2>Cadastre-se na EstoqueFlex</h2>
          </div> <form> <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Repita a senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={styles.loginButton}>Cadastrar</button>
            // <button type="submit" className={styles.loginButton}>Cadastrar com Google</button>
            // <button type="submit" className={styles.loginButton}>Cadastrar com Twitter</button>
          </form>
        </div>
      </div>
    </SimpleLayout>
  );
}

