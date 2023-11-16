const matrixInput = document.getElementById("matrix-size");
const acceptButton = document.querySelector(".accept-button");
const boardContainer = document.querySelector(".board-container");
const currentColor = document.querySelector("span");

// Color tool selectors
const redColorTool = document.querySelector(".red-color");
const blueColorTool = document.querySelector(".blue-color");
const greenColorTool = document.querySelector(".green-color");
const orangeColorTool = document.querySelector(".orange-color");
const whiteColorTool = document.querySelector(".white-color");

// Currently selected color
let selectedColor = "white-color"; // Default to white

// Initialize the game board
const initGame = () => {
  const matrixSize = parseInt(matrixInput.value);
  boardContainer.innerHTML = "";
  for (let i = 0; i < matrixSize; i++) {
    const row = addRow();
    boardContainer.appendChild(row);
    for (let j = 0; j < matrixSize; j++) {
      const cell = addCell();
      row.appendChild(cell);
      handleCell(cell);
    }
  }
};

// Function to create a new row
const addRow = () => {
  const row = document.createElement("div");
  row.className = "row"; // Add a class for styling if needed
  return row;
};

// Function to create a new cell
const addCell = () => {
  const cell = document.createElement("div");
  cell.className = "cell white-color"; // Start with white color
  return cell;
};

// Attach event listener to cells
const handleCell = (cell) => {
  cell.addEventListener("click", cellClickHandler);
};

// Event handler for cell click
const cellClickHandler = (event) => {
  if (
    event.target.classList.contains("white-color") ||
    selectedColor === "white-color"
  ) {
    // Remove all color classes
    event.target.className = "cell";
    // Add the selected color class
    event.target.classList.add(selectedColor);
  }
};

// Set up event listeners for color tools
const setupColorTools = () => {
  redColorTool.addEventListener("click", () => setColor("red-color"));
  blueColorTool.addEventListener("click", () => setColor("blue-color"));
  greenColorTool.addEventListener("click", () => setColor("green-color"));
  orangeColorTool.addEventListener("click", () => setColor("orange-color"));
  whiteColorTool.addEventListener("click", () => setColor("white-color"));
};

const setColor = (color) => {
  selectedColor = color;
  currentColor.textContent = color.split("-")[0] != 'white' ? color.split("-")[0] : "Clear" ;
};

setupColorTools();
// Start the game board setup
acceptButton.addEventListener("click", initGame);
// Set up the color tools
