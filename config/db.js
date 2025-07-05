const mongoose = require('mongoose');

const uri = 'mongodb://admin:Lis12345@54.156.27.209:27017/admin';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
