var mongoose = require('mongoose');

// Usar a biblioteca padrão de promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
