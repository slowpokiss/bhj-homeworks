for (let i = 0; i < 10; i++) {
  getHole(i + 1).onclick = function () {
    if (getHole(i + 1).className.includes( 'hole_has-mole' )) {     
      dead.innerHTML++;
      if (Number(dead.innerHTML) === 10) {
        dead.innerHTML = 0;
        lost.innerHTML = 0;
        alert("Победа!")
      }
    } else {
      lost.innerHTML++;
      if (Number(dead.innerHTML) === 5) {
        dead.innerHTML = 0;
        lost.innerHTML = 0;
        alert("Поражение")
      }
    }  
  }
}