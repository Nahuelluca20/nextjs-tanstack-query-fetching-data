import {PostsType} from "@/types/types";

export async function getPosts() {
  const posts: PostsType = await fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((data) => data.posts);

  return posts;
}
