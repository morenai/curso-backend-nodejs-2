const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    const {id, categoryId, productId } = req.params;
    res.status(200).json({
        categoryId,
        productId,
        id,
    });
});
module.exports = router;