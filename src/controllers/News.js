const News = require("../models/news")

module.exports = class noticia {
    constructor(req, res) {
        try {
            console.log("holaaaaaaaa")
            console.log(req.body.subtitle)
            console.log(req.file.filename)
            this.titulo = "yo"
            this.filename = req.file.filename

            /* this.titulo = req.body.title
            this.subtitulo = req.body.subtitle
            this.cnoti = req.body.cnoti

            //crear
            // this.f_creacion = req.body.f_creacion
            this.desc = req.body.description
            this.filename = req.file.filename
            this.path = "/uploads" + req.file.filename
            this.orinalname = req.file.originalname
            this.mimetype = req.file.mimetype
            this.size = req.file.size */
        } catch (eror) {
            res.send("hay un error")
                // console.log(error)
        }

    }

    async crear(req, res) {
        const news = new News({
            titulo: this.titulo,
            filename: this.filename,

            /* subtitulo: this.subtitulo,
            c_noti: this.cnoti,
            // f_creacion: this.f_creacion,
            d_noti: this.desc,
            filename: this.filename,
            path: this.path,
            orinalname: this.orinalname,
            mimetype: this.mim,
            size: this.size */

        })
        await news.save()
            // return res.send("Guardado con exito")
    }

}