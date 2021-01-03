let li = document.querySelectorAll("li");
let target = document.querySelector(".ul-dest");

function dragStart(e) {
  //   console.log(e);

  e.dataTransfer.setData("text/plain", e.target.id);
}
li.forEach(item => {
  item.addEventListener("dragstart", dragStart, false);
});

function cancel(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  return false;
}

function dropped(e) {
  cancel(e);
  let id = e.dataTransfer.getData("text/plain");
  console.log(id);
  let child = document.getElementById(id);
  let dropzone = e.target;
  dropzone.appendChild(child);
}

target.addEventListener("drop", dropped, false);
target.addEventListener("dragenter", cancel, false);
target.addEventListener("dragover", cancel, false);
