const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js'); //------changed to post
const commRoutes = require('./commRoute')

router.use('/users', userRoutes);
router.use('/posts', postRoutes); //------changed to post
router.use('/comment', commRoutes)

module.exports = router;
