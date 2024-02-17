const db = require('../db/models/index')

exports.busc = async (req, res, next) => {

    let id = req.params
    console.log("id:", id.id)

    const dados = await db.FincGer.findAll({
        where: {
          id: id.id,
        },
      });
    res.json(dados)
    console.log(dados)
    return
}

