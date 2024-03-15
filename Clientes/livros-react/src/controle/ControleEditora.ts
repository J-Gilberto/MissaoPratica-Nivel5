import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora(1, "O Globo"),
  new Editora(2, "Cosac & Naif"),
  new Editora(3, "HarperCollins"),
  new Editora(4, "Editora Tambaú"),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
