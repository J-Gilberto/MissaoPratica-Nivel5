const mongoose = require('./conexao');

// Definir a estrutura do schema para o livro
const LivroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
});


const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
