const express = require('express');
const router = express.Router(); 
 
//prueba
const list = [
    {nombre: 'SAMUEL', appllidos: 'ACERO GARCIA'},
    {nombre: 'DAREK', appllidos: 'ALJURI MARTINEZ'},
    {nombre: 'JUAN FELIPE', appllidos: 'CEPEDA URIBE'},
    {nombre: 'ANA MARIA', appllidos: 'CHAVES PEREZ'},
    {nombre: 'CARLOS DAVID', appllidos: 'CRUZ PAVAS'},
    {nombre: 'DIEGO NORBERTO', appllidos: 'DIAZ ALGARIN'},
    {nombre: 'JORGE ESTEBAN', appllidos: 'DIAZ BERNAL'},
    {nombre: 'DAVID ESTEBAN', appllidos: 'DIAZ VARGAS'},
    {nombre: 'JUAN JOSE', appllidos: 'FORERO PEÑA'},
    {nombre: 'SANTIAGO', appllidos: 'GUTIERREZ DE PIÑERES BARBOSA'},
    {nombre: 'SAMUEL ESTEBAN', appllidos: 'LOPEZ HUERTAS'},
    {nombre: 'MICHAEL STEVEN', appllidos: 'MEDINA FERNANDEZ'},
    {nombre: 'KATHERIN JULIANA', appllidos: 'MORENO CARVAJAL'},
    {nombre: 'JUAN PABLO', appllidos: 'MORENO PATARROYO'},
    {nombre: ' NICOLAS ESTEBAN', appllidos: 'MUÑOZ SENDOYA'},
    {nombre: 'SANTIAGO', appllidos: 'NAVARRO CUY'},
    {nombre: 'JUAN PABLO', appllidos: 'PARRADO MORALES'},
    {nombre: 'DANIEL SANTIAGO', appllidos: 'RAMIREZ CHINCHILLA'},
    {nombre: 'JUAN PABLO', appllidos: 'RESTREPO COCA'},
    {nombre: 'GABRIELA', appllidos: 'REYES GONZALEZ'}, 
    {nombre: 'JUAN JOSE', appllidos: 'RODRIGUEZ FALLA'},
    {nombre: 'VALENTINA', appllidos: 'RUIZ TORRES'},
    {nombre: 'MARIANA', appllidos: 'SALAS GUTIERREZ'},
    {nombre: 'SEBASTIAN', appllidos: 'SANCHEZ SANDOVAL'},
    {nombre: 'JOSUE DAVID', appllidos: 'SARMIENTO GUARNIZO'},
    {nombre: 'SANTIAGO', appllidos: 'SOLER PRADO'},
    {nombre: 'MARIA FERNANDA', appllidos: 'TAMAYO LOPEZ'},
    {nombre: 'DEIVID NICOLAS', appllidos: 'URREA LARA'},
    {nombre: 'ANDRÉS', appllidos: 'AZCONA'}
    
];

router.get('/:count', (req, res) => {
    const count = parseInt(req.params.count);
    let sorted = users.slice(0, count);

    const sort = req.query.sort;

    if (sort === 'DESC') {
        sortedUsers = sortedUsers.sort((a, b) => (a.apellido < b.apellido ? 1 : -1));
    } else {
        sortedUsers = sortedUsers.sort((a, b) => (a.apellido > b.apellido ? 1 : -1));
    }

    res.json(sortedUsers);
    
})

module.exports = router;