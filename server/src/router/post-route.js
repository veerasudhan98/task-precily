import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
  //   uploadImage,
  //   deleteImage,
  //   getImage,
} from "../controller/post-controller.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
// router.post("/image", uploadImage);
// router.get("/image", getImage);
// router.delete("/image", deleteImage);

export default router;
