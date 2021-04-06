const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes'); //------changed to post

router.use('/users', userRoutes);
router.use('/post', postRoutes); //------changed to post

module.exports = router;
