const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`)
}

for (let i = 0; i < 9; i++) {
  getHole(i + 1).onclick = function () {
    if (getHole(i + 1).className.includes( 'hole_has-mole' )) {     
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (Number(dead.textContent) === 10) {
      dead.textContent = 0;
      lost.textContent = 0;
      alert("Победа!")
    }

    if (Number(lost.textContent) === 5) {
      dead.textContent = 0;
      lost.textContent = 0;
      alert("Поражение")
    }
  }
}