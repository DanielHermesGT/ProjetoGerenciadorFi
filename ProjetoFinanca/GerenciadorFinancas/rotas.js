const express = require('express')

const rout = express.Router()
const recebedadosC = require('./src/controllers/recebedadosController')
const buscarGeral = require('./src/controllers/buscanadb')
const buscaresp = require('./src/controllers/buscaespc')
const atual = require('./src/controllers/atualizandobanc')
const apaga = require('./src/controllers/apagartable')



rout.post('/recebedados',recebedadosC.recebe)
rout.get('/consulta', buscarGeral.busc)
rout.get('/edit/:id', buscaresp.busc)
rout.post('/editnova', atual.atua)
rout.post('/apaga/:id', apaga.apaga)
module.exports = rout