const mongoose = require("mongoose")

function ValidId(req, res, next) {
 const {id} = req.params
 //valido el ID
 if (!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({message: 'Specified id is not valid'});
    return;
 }
   // siguiente paso usando next()   
  next();
}

module.exports = ValidId;