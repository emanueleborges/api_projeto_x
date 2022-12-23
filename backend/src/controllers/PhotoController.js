const database = require('../models');
require("dotenv").config();

class PhotoController {
     /**
     * POST /user
     */
    static async uploads(req, res) {
        console.log ('meu file: ', req.file.filename, 'meu Body: ', req.body.id,'meu params: ',  req.params.id )
        const  Photo  = req.file.filename;
        const { id } = req.params ;
        try
        {

            //const upload_user = await database.User.findOne({ where: { id: id } });
            const upload_user = await database.User.update({ photo: Photo }, {where: { id: id } });
            return res.status(200).json({msg: "File is successfully.", photo: Photo});
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
  
}

module.exports = PhotoController;