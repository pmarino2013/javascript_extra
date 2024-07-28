let url = "https://jsonplaceholder.typicode.com/users";

export function traerData() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}
