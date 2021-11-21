var fig;

function Rand(min, max) {
  return Math.random() * (max - min) + min;
}

function create(figureName) {
  let n = document.querySelector("input").value;

  if (n == "") {
    alert("Введите число");
  }
  for (let i = 0; i < n; i++) {
    fig = document.createElement("div");
    fig.className = figureName;

    let size = Rand(50, 200);
    let posTop = Rand(50, 950 - size);
    let posLeft = Rand(50, 1700 - size);

    fig.style.top = posTop + "px";
    fig.style.left = posLeft + "px";

    fig.addEventListener("click", changeColor);
    fig.addEventListener("dblclick", removeFigure);

    if (figureName == "square" || figureName == "circle") {
      fig.style.width = size + "px";
      fig.style.height = size + "px";
    }

    if (figureName == "triangle") {
      fig.style.borderLeftWidth = size + "px";
      fig.style.borderRightWidth = size + "px";
      fig.style.borderBottomWidth = size + "px";
    }
    document.body.append(fig);
  }
}

function changeColor(event) {
  if (event.target.className == "triangle") {
    event.target.style.borderBottomColor = "yellow";
  } else {
    event.target.style.backgroundColor = "yellow";
  }
}

function removeFigure(event) {
  event.target.style.display = "none";
}
