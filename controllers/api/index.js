const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes); // /api/user
router.use('/post', postRoutes); // /api/post
router.use('/comment', commentRoutes); // /api/comment

module.exports = router;