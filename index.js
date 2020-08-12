require('dotenv').config();
const express = require('express');
const cors = require('cors');
const exStatic = require('express-static')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(exStatic('./'));

app.listen(PORT, () => {
  console.log('captain Teemo on duty')
})