// change color
document.getElementById("change_button").addEventListener("click", function () {

  let blockId = document.getElementById("block_id").value;
  let color = document.getElementById("colour_id").value;

  let blocks = document.querySelectorAll("#grid-item");

  // step 1: reset all
  blocks.forEach(function (item) {
    item.style.backgroundColor = "transparent";
  });

  // step 2: apply color
  let index = blockId - 1;
  if (blocks[index]) {
    blocks[index].style.backgroundColor = color;
  }
});

// reset button
document.getElementById("Reset").addEventListener("click", function () {

  let blocks = document.querySelectorAll("#grid-item");

  blocks.forEach(function (item) {
    item.style.backgroundColor = "transparent";
  });
});