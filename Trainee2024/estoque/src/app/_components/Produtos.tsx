import { link } from "fs";
import styles from "~/styles/produtos.module.css";

export async function Produtos() {
  try {
    const response = await fetch("http://localhost:3000/api/produtos");
    const data: { mensage: string; produtos: { id: number; name: string }[] } =
      (await response.json()) as {
        mensage: string;
        produtos: { id: number; name: string }[];
      };

    // Log da resposta para depuração
    console.log("Resposta da API:", data);

    // Verificação para garantir que data.produtos está definido
    if (!data || !data.produtos) {
      throw new Error("A estrutura da resposta da API é inválida.");
    }

    return (
      <div className={styles.produtos}>
        <div className={styles.pesquisa}>
          <input type="text" />
          <button>Cadastrar</button>
        </div>
        <ul className={styles.listprodutos}>
          {data.produtos.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return (
      <div className={styles.erro}>
        <p>Ocorreu um erro ao carregar os produtos.</p>
      </div>
    );
  }
}
