import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { LinhaLivro } from "@/components/LinhaLivro";

const baseURL = "http://localhost:3030/livros";

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const resposta = await fetch(baseURL);
      const dados = await resposta.json();
      setLivros(dados);
      setCarregado(true);
    } catch (erro) {
      console.error("Erro ao obter livros:", erro);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });
      return resposta.ok;
    } catch (erro) {
      console.error("Erro ao excluir livro:", erro);
      return false;
    }
  };

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  useEffect(() => {
    obterLivros();
    setCarregado(true);
  }, [carregado]);

  return (
    <div className="container">
      <Head>
        <title>Livro Lista</title>
      </Head>

      <div>
        <h1>Livros</h1>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Título</th>
              <th>Editora</th>
              <th>Autor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro._id}
                livro={livro}
                excluir={() => excluir(livro._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LivroLista;
