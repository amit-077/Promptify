window.addEventListener("load", () => {
  const button = document.createElement("button");
  button.textContent = "Generate";
  button.style.position = "fixed";
  button.style.bottom = "38px";
  button.style.right = "130px"; // 20px
  button.style.backgroundColor = "#c1c1c1";
  button.style.color = "black";
  button.style.padding = "10px 15px 10px 15px";
  button.style.borderRadius = "10px";
  button.style.zIndex = "9999";
  button.id = "newBtn";
  document.body.appendChild(button);
  //
  document.getElementById("newBtn").addEventListener("click", async () => {
    let data = document.getElementById("prompt-textarea").value;
    button.textContent = "Generating...";
    let data1 = await fetch("https://gemeni-nine.vercel.app/generate", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ prompt: data }),
    });
    // Logging data
    let data12 = await data1.json();
    console.log(data12);
    document.getElementById("prompt-textarea").style.height = "130px";
    document.getElementById("prompt-textarea").parentElement.style.height =
      "130px";

    document.getElementById("prompt-textarea").value = data12;

    document.getElementById("prompt-textarea").innerHTML = data12;
    button.textContent = "Generate";
  });
});

document.body.addEventListener("keydown", () => {
  if (document.getElementById("prompt-textarea").innerHTML.length > 0) {
    document.getElementById("newBtn").style.backgroundColor = "white";
  } else {
    document.getElementById("newBtn").style.backgroundColor = "#c1c1c1";
  }
});
