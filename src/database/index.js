const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://teste:teste@cluster0-ts7fb.mongodb.net/test?retryWrites=true&w=majority', 

{  useUnifiedTopology: true, useNewUrlParser: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;





