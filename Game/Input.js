document.addEventListener('keydown', processkeyboarddown, false);
document.addEventListener('keyup', processkeyboardup,false);
document.addEventListener('click', processmouse);

var keyboard = {
  w:false,
  a:false,
  s:false,
  d:false
}

function processkeyboarddown(event) {
  if (event.key == 'w') {
    keyboard.w = true
  }
  if (event.key == 'd') {
    keyboard.d = true
  }
  if (event.key == 's') {
    keyboard.s = true
  }
  if (event.key == 'a') {
    keyboard.a = true
  }
}

function processkeyboardup(event) {
  if (event.key == 'w') {
    keyboard.w = false
  }
  if (event.key == 'd') {
    keyboard.d = false
  }
  if (event.key == 's') {
    keyboard.s = false
  }
  if (event.key == 'a') {
    keyboard.a = false
  }
}


function processmouse () {
  
}