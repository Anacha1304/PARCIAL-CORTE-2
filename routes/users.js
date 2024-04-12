const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const {nombre, apellido, correo} = req.body;

        const ciudad = req.body.ciudad || 'Bogotá';
        const pais = req.body.pais ||'Colombia';

        const user = {
            nombre, apellido, correo, ciudad, pais     

    
        }
        res.json(user);
    }catch (error){
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
})

module.exports = router;