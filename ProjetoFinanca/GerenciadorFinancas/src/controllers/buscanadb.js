const db = require('../db/models/index')
exports.busc = async (req,res,next) =>{
    const dados = await db.FincGer.findAll()
    res.json(dados)
    return
}

