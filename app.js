const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();


app.use(express.json({ extended: true }));

// Подключение middleware
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t/', require('./routes/redirect.routes'));



const PORT = config.get('port');
const MONGO_URL = config.get('mongoUri');


async function start() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (error) {
    console.log('Server Error: ', error.message);
    process.exit(1);

  }
}

start();

