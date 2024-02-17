const db = require('../db/models/index')
exports.apaga = async (req,res,next) =>{

    let id = req.params
    console.log("id:", id.id)
    const dados = await db.FincGer.destroy({
        where: {
          id: id.id
        },
      })
      .then((resp) => {
        console.log(res)
       return res.json({
            error:false,
            msg: "foi",
        })
    })
}
