const db = require('../db/models/index')

exports.recebe =  async (req, res, next) =>{

    
    let data = req.body

    await db.FincGer.create(data)
    .then(datares =>{
        console.log(datares)
        return res.json({
            error:false,
            mensagem: "foi",
            
        })
    })
    .catch(e => {
        return res.json({
            error: true,
            mensagem: "Error"
        })
    })


    return

}