//your JS code here. If required
document.getElementById("change_button").addEventListener("click", () => {

  let blockId = document.getElementById("block_id").value;
  let color = document.getElementById("colour_id").value;

  let allBlocks = document.querySelectorAll(".grid-item");

  // 🧠 step 1: sabko reset karo
  allBlocks.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // 🧠 step 2: selected block ko color do
  let selected = document.getElementById(blockId);
  if (selected) {
    selected.style.backgroundColor = color;
  }
});


document.getElementById("Reset").addEventListener("click", () => {
  let allBlocks = document.querySelectorAll(".grid-item");

  allBlocks.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});