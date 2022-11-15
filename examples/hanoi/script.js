// rods
const rods = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C"),
};
// controllers
const start = document.getElementById("start");

const TIME = 500; // ms

const moves = [];
function recordMoves(n, from, to, via) {
  if (n === 1) {
    moves.push([from, to]);
    return;
  }
  recordMoves(n - 1, from, via, to);
  recordMoves(1, from, to, via);
  recordMoves(n - 1, via, to, from);
}

(() => {
  const n = window.prompt("Enter the number of disks! pls");
  const disks = [];
  for (let i = 0; i < n; i++) {
    const disk = document.createElement("div");
    disk.classList.add("disk");
    disk.style.width = `calc(3rem + ${n - i}rem)`;
    disks.push(disk);
  }
  for (let i = n - 1; i >= 0; i--) {
    rods["A"].appendChild(disks[i]);
  }
  recordMoves(n, "A", "C", "B");
})();

function moveDisk(from, to) {
  const fromEl = rods[from];
  const toEl = rods[to];

  const disk = fromEl.firstChild;
  toEl.insertBefore(disk, toEl.firstChild);
}

start.addEventListener("click", () => {
  start.disabled = true;
  setInterval(() => {
    if (moves.length === 0) {
      return;
    }
    const [from, to] = moves.shift();
    moveDisk(from, to);
  }, TIME);
});
