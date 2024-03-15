import { Livro } from "../../src/modelo/Livro";



class ControleLivro {
  public baseUrl = "http://localhost:3030/livros";

  async obterLivros() {
    const resposta = await fetch(this.baseUrl, {
      method: "GET",
    });
    const respostaJson = await resposta.json();
    return respostaJson.map((livro: any) => {
      const newlivro = new Livro();
      newlivro.codigo = livro._id;
      newlivro.codEditora = livro.codEditora;
      newlivro.titulo = livro.titulo;
      newlivro.resumo = livro.resumo;
      newlivro.autores = livro.autores;
      //console.log(newlivro)
      return newlivro;
    });
  }

  async incluir(livro: any) {
    livro._id = null;
    delete livro.codigo;
    //console.log(livro)
    const resposta = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });
    return resposta.ok;
  }

  async excluir(codigo: string) {
    const resposta = await fetch(`${this.baseUrl}/${codigo}`, {
      method: "DELETE",
    });
    return resposta.ok;
  }
}

export default ControleLivro;
