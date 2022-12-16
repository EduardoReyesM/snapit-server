const router = require("express").Router();
const Product = require("../models/Product.model");
const ValidId = require("../middleware/ValidId");

// 2. Genero la ruta Post
// C - create - Post - Crando mi proyecto
router.post("/product", (req, res,) => {
    console.log(req.body)
// POSt - usare .create(datos)
    Product.create(req.body)
     .then((productCreado) => {
      res.json(productCreado);
    })
  .catch((err) => console.log(err));  
});
// Read - Get - todos los market 
router.get("/product", async (req, res) => {
    try{
       // GET- Model.find(filter)
       const products = await Product.find()
       res.json(products)
    }catch(err){
        console.log(err);
    }
})

// Read - Get - detalles de mi proyecto por ID
router.get("/product/:id",ValidId, async (req, res) => {
    try{
    const {id} = req.params;

    // GET - Model.findById(id)
    const productDetails = await Product.findById(id)
    res.json(productDetails);
    }catch(err){
        console.log(err)
    }
});

// Update - PUt - Acutalizar la parte algo usando ID/Params
router.put("/product/:id",ValidId, async (req, res) => {
    try{
    const {id} = req.params;

    // PUT - Model.findByIdAndUpdate(id,nuevosDatos,{new: true});
    const productActualizado = await Product.findByIdAndUpdate(id, req.body,{
     new: true,
    });

    res.json(productActualizado)
    }catch(err){
        console.log(err)
    }
})

// Delete- DELETE - eliminar una parte
router.delete("/product/:id", ValidId, (req, res) => {
    const {id} = req.params;
    //validamos el ID

    // DELETE - Model.findByIdAndDelete(id)
    Product.findByIdAndDelete(id)
    .then((productEliminado) => {
        res.json(productEliminado)
    })
    .catch(err => console.log(err))
})

module.exports = router;