const express = require('express')
const cors = require('cors')
const app = express()
const rout = require('./rotas')
app.use(express.json()) 
app.use((req, res, next) =>{

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    
    app.use(cors())

    next()
})

app.use(rout)
app.use(cors())
app.use(express. urlencoded({extended:true}))





app.listen(3005, () =>{
    console.log('Acessando http://localhost:3005') 
    console.log('Servidor executando na porta 3005')
}) 