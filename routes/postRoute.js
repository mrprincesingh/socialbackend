import express from "express";
import { createPost, deletePostById, getAllPost, getPostById, getTopLikedPosts, getTotalPosts, likePostById, undislikePostById, updatePostById } from "../controllers/postController.js";

const router = express.Router();

router.route("/getpost").get(getAllPost)

router.route('/posts').post( createPost );

// Retrieve a post by id
router.route('/posts/:id').get(getPostById );

// Update a post's content by id (requires authentication)
router.route('/posts/:id').put( updatePostById);

// Delete a post by id (requires authentication)
router.route('/posts/:id').delete( deletePostById);

// Increment the like count of a post by id (requires authentication)
router.route('/posts/:id/like').post(likePostById);

// Decrement the like count of a post by id (not below 0)
router.route('/posts/:id/unlike').post(undislikePostById);

// Retrieve the total number of posts
router.route('/analytics/posts').get(getTotalPosts);

// Retrieve the top 5 most liked posts
router.route('/analytics/posts/top-liked').get(getTopLikedPosts);

export default router;