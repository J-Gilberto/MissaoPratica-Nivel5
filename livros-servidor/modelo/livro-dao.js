const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
    try {
        return await Livro.find();
    } catch (error) {
        console.error('Erro ao obter livros:', error);
        throw error;
    }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
    try {
        return await Livro.create(livro);
    } catch (error) {
        console.error('Erro ao incluir livro:', error);
        throw error;
    }
};

// Função para excluir um livro pelo ID
const excluir = async (codigo) => {
    try {
        return await Livro.deleteOne({ _id: codigo });
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        throw error;
    }
};

// Exportar as funções definidas
module.exports = {
    obterLivros,
    incluir,
    excluir
};
