import express from "express";
//controllers
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
} from "../controller/post-controller.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
