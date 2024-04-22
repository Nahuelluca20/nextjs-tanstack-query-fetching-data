export async function getPosts() {
  const posts = await fetch("https://dummyjson.com/posts");

  return posts;
}
