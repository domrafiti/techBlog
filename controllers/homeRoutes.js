const router = require('express').Router();
const { Post, User } = require('../models'); //updated to import post
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('he');
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({ //--------Updated to postData and Post.findAll
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true })); //--------changed from project to post

    //console.log(posts);

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts, //-------------changed to posts
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => { //----need to change route 
  try {
    const postData = await Post.findByPk(req.params.id, {//-------changed to post
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', { //------tied to project.handlebars - updated file name to post.handlebars
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }], //-------changed to post
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
