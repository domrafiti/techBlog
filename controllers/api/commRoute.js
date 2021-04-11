const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComm = await Comment.create({ ...req.body });
        res.status(200).json(newComm);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;