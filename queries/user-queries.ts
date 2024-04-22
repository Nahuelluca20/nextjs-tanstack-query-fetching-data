export async function getUserNameById(id: number) {
  const userName = await fetch(`https://dummyjson.com/users/${id}?select=username`)
    .then((response) => response.json())
    .then((data) => data.userName);

  return userName;
}
