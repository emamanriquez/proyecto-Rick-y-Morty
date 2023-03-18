const express = require('express');
const router = express.Router();
const  { getCharById }  = require('../controllers/getCharById')
const { getCharDetail } = require('../controllers/getCharDetail');
const { favs } = require('../utils/favs');

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.get('/fav', (req, res) => {
    res.status(200).json(favs);
})

router.post('/fav', (req, res) => {
    const { id, name, species, image, gender} = req.body;
    console.log(req.body);
    if(!id || !name || !species || !image || !gender) {
        return res.status(404).send('Faltan datos')
    }
    else {
        const character = {
            id, 
            name, 
            species,
            image,
            gender
        }
        favs.push(character);
        res.status(200).json(favs);
    }
})

router.delete('/fav/:id', (req, res) => {
    const { id } = req.params;
    const characterDelete = favs.filter(char => char.id !== Number(id));
    console.log("soy delete", characterDelete);
    favs = characterDelete;
    res.status(200).send("Se eliminó el personaje correctamente");
})

module.exports = router;

