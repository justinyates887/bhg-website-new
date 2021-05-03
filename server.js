const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.URI,
    {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  mongoose.connection
  .on('error', (error) => {
      console.error('Error at mongo.js :' + error)
  })
  .on('open', () => {
      console.log('[mongoose] connected')
  })
  .on('close', () => {
      console.log('[mongoose] connection closed')
  })
  .on('connecting', () => {
      console.log('[mongoose] connecting...')
  })
  .on('reconnected', () => {
      console.log('[mongoose] reconnected after interrupt')
  })
  .on('reconnectFailed', error => {
      console.error('[mongoose] reconnection failed due to error:' + error);
  });

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});