
window.onload=function() {
  canv=document.getElementById("gc");
  ctx=canv.getContext("2d");
  setInterval(loop, 1000/60)
}

function loop() {
  clearscreen()
  player.update()
  

  platforms.draw()
  player.draw()
}