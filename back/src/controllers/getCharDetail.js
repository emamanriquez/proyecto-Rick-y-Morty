const axios = require('axios');
const URL = "_https://rickandmortyapi.com/api/character/_"

const getCharDetail = (req, res) => {
    const { detailId } = req.params;
    axios(`${URL}/${detailId}`)
    .then((response) => response.data)
    .then( data => {
        const character = {
            id: data.id,
            image: data.image, 
            name: data.name, 
            gender: data.gender, 
            status: data.status, 
            origin: data.origin,
            species: data.species
        }
        res.status(200).json(character);
    })
    .catch((error)=> {
        res.status(500).json({error: error.message})
    })
    
}




module.exports = {
    getCharDetail
}