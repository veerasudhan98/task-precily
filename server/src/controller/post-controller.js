import Post from "../model/post.js";
// import multer from "multer";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = await Post.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  console.log(req.body);
  const { id: _id } = req.params;
  const post = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, {
      new: true,
      runValidators: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndRemove(_id);
    res.json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

// //uploading image
// const upload = multer({
//   //dest: 'avatars',
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // learn reqular expression at regex101.com
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       // match is used to use reqular expression inside it with '//'.
//       return cb(new Error("upload an imaga"));
//     }
//     cb(undefined, true);
//   },
// });

// export const uploadImage =
//   (upload.single("avatar"),
//   async (req, res) => {
//     const buffer = await sharp(req.file.buffer)
//       .resize({ width: 250, height: 250 })
//       .png()
//       .toBuffer();
//     req.user.avatar = buffer;
//     await req.user.save();
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   });

// export const deleteImage = async (req, res) => {
//   req.user.avatar = undefined;
//   await req.user.save();
//   res.send();
// };

// export const getImage = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user || !user.avatar) {
//       throw new Error();
//     }
//     res.set("Content-Type", "image/png");
//     res.send(user.avatar);
//   } catch (e) {
//     res.status(404).send();
//   }
// };
