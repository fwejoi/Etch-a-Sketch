const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("gridItem");
  container.appendChild(gridItem);
}

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("gridItem")) {
    e.target.style.backgroundColor = "pink";
  }
});
container.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("gridItem")) {
    e.target.style.backgroundColor = "";
  }
});

const gridSize=640;
function createNewgrid(num) {
    const itemSize=640/num;
  for (let i = 0; i < num * num; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.style.width = `${itemSize}px`; // 设置网格项的宽度
    gridItem.style.height = `${itemSize}px`; // 设置网格项的高度
    container.appendChild(gridItem);
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  let userInput = prompt("输入您想获得的网格数：");
  container.innerHTML = "";
  createNewgrid(userInput);
});
