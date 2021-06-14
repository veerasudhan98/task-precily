import React, { useState, createContext } from "react";
import axios from "axios";

export const PostContext = createContext();

const fetchPosts = async () => {
  console.log("workign");
  try {
    const response = await axios.get({
      method: "get",
      url: "/api/posts/",
    });
    console.log("response", response);
  } catch (e) {
    console.log("Error:", e);
  }
};
export const PostProvider = (props) => {
  const [post, setPost] = useState(fetchPosts);

  return (
    <PostContext.Provider value={[post, setPost]}>
      {props.children}
    </PostContext.Provider>
  );
};
