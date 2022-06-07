'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('
             Nama : Agustiawan <br/>
             Nim : 51021802 <br/r>
             Jurusan : Sistem Informasi
             Mata Kuliah cloud computing!
      ')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
