const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const { categoryId, productId } = req.params;
    res.send({
        
        categoryId 25,
        productId: 23,
    });
})
module.exports = router;