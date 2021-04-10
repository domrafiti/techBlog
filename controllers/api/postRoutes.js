const router = require('express').Router();
const { Post } = require('../../models'); //------changed to post
const withAuth = require('../../utils/auth');

//working - tested- stable
router.post('/', withAuth, async (req, res) => {
  console.log("POST CALLED");
  console.log(req.body, req.session.user_id);
  try {
    const newPost = await Post.create({ //------changed to post
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost); //------changed to post
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  console.log("DELETING LOG");
  try {
    const postData = await Post.destroy({ //------changed to post
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {   //------changed to post
      res.status(404).json({ message: 'No post found with this id!' });  //------changed to post
      return;
    }

    res.status(200).json(postData);  //------changed to post
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
