import {PostsType} from "@/types/types";

export async function getPosts() {
  const posts: PostsType = await fetch(
    "https://dummyjson.com/posts?&select=title,reactions,userId,tags",
  )
    .then((response) => response.json())
    .then((data) => data.posts);

  return posts;
}
