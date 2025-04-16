let parentElm = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  let button = document.createElement("button");
  button.innerText = "Button " + (i + 1);

  if (i % 2 === 1) {
    button.style.backgroundColor = "magenta";
  }

  button.addEventListener("click", function () {
    alert("Bạn vừa click vào nút " + (i + 1));
  });

  parentElm.appendChild(button);
}
