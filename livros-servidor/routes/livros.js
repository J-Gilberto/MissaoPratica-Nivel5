const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter livros' });
    }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    const livro = req.body;
    try {
        await livroDao.incluir(livro);
        res.json({ message: 'Livro incluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao incluir livro' });
    }
});

// Rota para excluir um livro pelo ID
router.delete('/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    try {
        await livroDao.excluir(codigo);
        res.json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro' });
    }
});

module.exports = router;
