export async function getPosts() {
  const posts = await fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((data) => data.posts);

  return posts;
}
