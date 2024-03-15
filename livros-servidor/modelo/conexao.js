const mongoose = require('mongoose');

// Definir as opções de conexão
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Efetuar a conexão com o MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/livraria', options);

module.exports = mongoose;
