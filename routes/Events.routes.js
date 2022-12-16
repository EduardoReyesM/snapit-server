const router = require("express").Router();
const ValidId = require("../middleware/ValidId");
const Event = require("../models/Event.model");


// 2. Genero la ruta Post
// C - create - Post - Crando mi proyecto
router.post("/event", (req, res,) => {
    console.log(req.body)
// POSt - usare .create(datos)
    Event.create(req.body)
     .then((eventCreado) => {
      res.json(eventCreado);
    })
  .catch((err) => console.log(err));  
});
// Read - Get - todos los proyectos 
router.get("/event", async (req, res) => {
    try{
       // GET- Model.find(filter)
       const events = await Event.find()
       res.json(events)
    }catch(err){
        console.log(err);
    }
})

// Read - Get - detalles de mi proyecto por ID
router.get("/event/:id",ValidId, async (req, res) => {
    try{
    const {id} = req.params;
        
    // GET - Model.findById(id)
    const eventDetails = await Event.findById(id)
    res.json(eventDetails);
    }catch(err){
        console.log(err)
    }
});

// Update - PUt - Acutalizar la parte algo usando ID/Params
router.put("/event/:id",ValidId, async (req, res) => {
    try{
    const {id} = req.params;

    // PUT - Model.findByIdAndUpdate(id,nuevosDatos,{new: true});
    const eventActualizado = await Event.findByIdAndUpdate(id, req.body,{
     new: true,
    });

    res.json(eventActualizado)
    }catch(err){
        console.log(err)
    }
})

// Delete- DELETE - eliminar una parte
router.delete("/event/:id",ValidId, (req, res) => {
    const {id} = req.params;

    // DELETE - Model.findByIdAndDelete(id)
    Event.findByIdAndDelete(id)
    .then((eventEliminado) => {
        res.json(eventEliminado)
    })
    .catch(err => console.log(err))
})

module.exports = router;