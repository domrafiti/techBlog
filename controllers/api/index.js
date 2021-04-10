const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js'); //------changed to post

router.use('/users', userRoutes);
router.use('/posts', postRoutes); //------changed to post

module.exports = router;
