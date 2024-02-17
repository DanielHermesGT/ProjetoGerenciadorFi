const db = require('../db/models/index')
exports.atua = async (req,res,next) =>{

    let data = req.body

    
    const saldo = data.saldo
    const ganhos = data.ganhos
    const despesas = data.despesas

    const dados = await db.FincGer.update({saldo: saldo , ganhos: ganhos  , despesas: despesas }, {
        where: {
            id: data[0].id,
        }
    }).then((res) => {
        console.log(res)
       return res.json({
            error:false,
            msg: "foi",
        })
    }).catch((error) => {
        return res.json({
            error:true,
            msg: "nao foi",
        })
    });
    
    
}
