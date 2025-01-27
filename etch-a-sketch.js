/* Etch a sketch odin project */
const createGridBtn = document.querySelector(".create-grid");
const resetGridBtn = document.querySelector(".reset-grid");

createGridBtn.addEventListener("click", () => {
  const gridCount = parseInt(prompt("Enter a grid up to 1 - 100"));
  container.innerHTML = "";
  addGrid(gridCount);
});

resetGridBtn.addEventListener("click", () => {
  container.innerHTML = "";
});

const container = document.querySelector(".container");

function addGrid(gridCount) {
  if(gridCount < 1 || gridCount > 100) {
    return; // quit the addgrid function if gridcount is either greater or less than to 1 and 100
  };

  const gridsSize = 694 / gridCount;
  console.log(gridsSize);

  for(let i = 0; i < gridCount * gridCount; i++) {
    const grids = document.createElement("div");

    grids.style.border = "1px solid lightgrey";
    grids.style.width = `${gridsSize}px`;
    grids.style.height = `${gridsSize}px`;

    grids.addEventListener("mouseover", () => {
      grids.style.backgroundColor = "lightgrey";
    });

    container.appendChild(grids)
  };

};

 
