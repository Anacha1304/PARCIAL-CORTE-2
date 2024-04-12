const express = require('express');
const router = express.Router();

router.get('/:coinName', (req, res) => {
    const coin = req.params.coinName.toLowerCase();

    const url = `https://docs.coincap.io/v2/assets/${coin}`;

    require('https').get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            try {
                const coinData = JSON.parse(data);

                if (coinData.data) {
                    const price = coinData.data.price;
                    res.send(`El día de hoy la moneda ${coin} tiene un valor de ${price}`);
                } else {
                    res.send('El nombre de la moneda que se está buscando no fue encontrado en la base de datos');
                }
            } catch (error) {
                console.error(error);
                res.status(500).send('Error en el procesamiento de la solicitud');
            }
        });
    }).on('error', (error) => {
        console.error(error);
        res.status(500).send('Error al procesar la solicitud');
    });
});

module.exports = router;
