/* Etch a sketch odin project */

/* BTN element reference */
const createGridBtn = document.querySelector(".create-grid");
const resetGridBtn = document.querySelector(".reset-grid");
const randomColorBtn = document.querySelector(".random-color");
/* BTN element reference */

/* btn evenlisteners */
createGridBtn.addEventListener("click", () => {
  const gridCount = parseInt(prompt("Enter a grid up to 1 - 100"));
  container.innerHTML = "";
  addGrid(gridCount);
});

resetGridBtn.addEventListener("click", () => {
  container.innerHTML = "";
});

randomColorBtn.addEventListener("click", () => {
  randomColor();
})
/* btn evenlisteners */


const container = document.querySelector(".container");// container element reference

/* functions */
function addGrid(gridCount) {
  if(gridCount < 1 || gridCount > 100) {
    alert("the value should be greater than 1 and less than 100!")
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
      if(!grids.dataset.opacity) {
        grids.dataset.opacity = 0; // Initialize opacity for each grids
      }
      let currentOpacity = parseInt(grids.dataset.opacity);
      if(currentOpacity < 100) {
        grids.style.opacity = `${currentOpacity / 100}`;
        grids.dataset.opacity = currentOpacity + 30;
      }
      grids.style.backgroundColor = "grey";
    });

    container.appendChild(grids)
  };
};

function randomColor() {
  const grids = container.children;

  for(let grid of grids) {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = `
        rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`
    })
  }
};

/* functions */

 
