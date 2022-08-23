const { Router } = require('express')
const { postPet } = require("../utils/controllers/posts")
const verifyToken = require('../utils/middlewares/validateToken');
const router = Router()

router.post("/pets/:id", verifyToken, async (req, res, next) => {
    const { id } = req.params;
    const {
        name,
        image,
        imagePool,
        type,
        description,
        size,
        age,
        vaccination,
        castrated,
        place,
        gender,
    } = req.body;
    try {
        const newPet = postPet(id, name, image, imagePool, type, description, size, age, vaccination, castrated, place, gender)
        res.status(201).send(newPet)
    } catch (error) {
        console.error(error);
    }
})

module.exports = router