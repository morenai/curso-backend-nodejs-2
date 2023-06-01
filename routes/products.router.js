// const { faker } = require('@faker-js/faker');
const express = require('express');

const router = express.Router(); 

router.get('/:id', (req, res ) => {
    const{ id } = req.params;
    if (id === '999') {
        res.status(404).json({
            message: "not found"
            });
    }else {
    res.status(200).json({
        id,
        name: 'Product 23',
        price: 2000
        })
    }
});



router.post('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json({
        message: 'Created by morenai',
        data: body,
        id,
    });
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json({
        message: 'update correct with patch, status massage ok',
        data: body,
        id,
    });
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    res.json({
        message: 'deleted',
        id,
    });
});

module.exports = router