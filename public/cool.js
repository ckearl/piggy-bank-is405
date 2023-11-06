const target = document.getElementById("target");
const draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

target.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);

  // Move the dragged element to the target's position.
  draggedElement.style.position = "absolute";

  draggedElement.style.left = `${target.offsetLeft}px`;
  draggedElement.style.top = `${target.offsetTop}px`;
  draggedElement.style.transform = "rotate(360deg) scale(0)";
  // Delay the removal of the dragged element (you can adjust the duration).
  setTimeout(() => {
    draggedElement.style.display = "none";

    // eslint-disable-next-line no-restricted-globals
    confirm(
      "You shouldnt flush money down the toilet. Promise not to do it again?"
    );

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }, 1000); // Delay for 1 second (1000 milliseconds).
});

target.addEventListener("dragover", (e) => {
  e.preventDefault();
});
