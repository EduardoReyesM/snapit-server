// http://localhost:5005/api/post
// 1. Genero mi router
const router = require("express").Router();
const Post = require("../models/Post.model");
const ValidId = require("../middleware/ValidId");


// 2. Genero la ruta Post
// C - create - Post - Crando mi proyecto
router.post("/post", (req, res,) => {
    console.log(req.body)
// POSt - usare .create(datos)
    Post.create(req.body)
     .then((postCreado) => {
      res.json(postCreado);
    })
  .catch((err) => console.log(err));  
});
// Read - Get - todos los posts 
router.get("/post", async (req, res) => {
    try{
       // GET- Model.find(filter)
       // .populate('llaves) buscar la info y llenar
    const posts = await Post.find().populate("user", "comments")
       res.json(posts)
    }catch(err){
        console.log(err);
    }
})

// Read - Get - detalles de mi proyecto por ID
router.get("/post/:id", ValidId, async (req, res) => {
    try{
    const {id} = req.params;
        
    // GET - Model.findById(id)
    const postDetails = await Post.findById(id)
    res.json(postDetails);
    }catch(err){
        console.log(err)
    }
});

// Read - Get - detalles de mi proyecto por ID
router.get("/post/user/:id", ValidId, async (req, res) => {
    try{
    const {id} = req.params;
        
    // GET - Model.findById(id)
    const postDetails = await Post.find({user: id})
    res.json(postDetails);
    }catch(err){
        console.log(err)
    }
});

// Update - PUt - Acutalizar la parte algo usando ID/Params
router.put("/post/:id", ValidId, async (req, res) => {
    try{
    const {id} = req.params;

    // PUT - Model.findByIdAndUpdate(id,nuevosDatos,{new: true});
    const postActualizado = await Post.findByIdAndUpdate(id, req.body,{
     new: true,
    });

    res.json(postActualizado)
    }catch(err){
        console.log(err)
    }
})

// Delete- DELETE - eliminar una parte
router.delete("/post/:id", ValidId, (req, res) => {
    const {id} = req.params;

    // DELETE - Model.findByIdAndDelete(id)
    Post.findByIdAndDelete(id)
    .then((postEliminado) => {
        res.json(postEliminado)
    })
    .catch(err => console.log(err))
})

module.exports = router;