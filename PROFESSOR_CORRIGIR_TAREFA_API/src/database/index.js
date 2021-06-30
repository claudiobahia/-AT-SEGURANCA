const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest2', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;