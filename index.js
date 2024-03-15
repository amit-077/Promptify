const getData = async () => {
  let res = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await res.json();
  document.getElementById("data").innerHTML = data.value;

  const button = document.createElement("button");
  button.textContent = "Generate";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = "9999";
  document.body.appendChild(button);
};

window.addEventListener("load", () => {
  getData();
});
