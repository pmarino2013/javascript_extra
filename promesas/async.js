let url = "https://jsonplaceholder.typicode.com/users";

export async function traerDataAsync() {
  let resp = await fetch(url);
  let data = await resp.json();

  return data;
}
