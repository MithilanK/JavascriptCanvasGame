
var player = {
  x:70,
  y:0,
  width: 16,
  height: 32,
  yvel : 0.0,
  xvel : 0.0,
  jumpheight : 4,
  xspeed: 2,
  isgrounded : false,
  isceiled: false,
  isleftwalled: false,
  isrightwalled: false,
  isjumping: false,
  iswalljumping: false,
  gravity: .1,

  draw: function() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height)


  },

  xPhysics: function() {
    player.isleftwalled = false
    player.isrightwalled = false




    

    if (player.xvel <.1 && player.xvel >-.1) {
      player.xvel =0
    }

    if (player.xvel > 0) {
      player.xvel -= .1
    }
    if (player.xvel <0) {
      player.xvel += .1
    }

    if (keyboard.a == true && player.xvel >-2.4) {
      player.xvel += -1 * (.6);
    }
    else if (keyboard.d == true && player.xvel<2.4) {
      player.xvel += (.6);
    }

    player.x += player.xvel





    if (collideRect(platforms.platform1, player) && player.xvel > 0) {
      player.xvel = 0;
      while (collideRect(platforms.platform1, player)) {
        player.x-=.1
      } 
      player.isrightwalled = true
    }

    if (collideRect(platforms.platform1, player) && player.xvel < 0) {
      player.xvel = 0;
      while (collideRect(platforms.platform1, player)) {
        player.x+=.1
      } 
      player.isleftwalled = true
    }
  },

  update: function() {



    
    
    

    player.isgrounded = false;
    player.isceiled = false;

    player.yvel += player.gravity;
    player.y = player.y + player.yvel;

    if (collideRect(platforms.platform1, player) && player.yvel > 0) {
      player.yvel = 0;
      while (collideRect(platforms.platform1, player)) {
        player.y-=.1
      }
      player.y = platforms.platform1.y - player.height;
      player.isgrounded = true;
    }

    if (collideRect(platforms.platform1, player) && player.yvel < 0) {
      player.yvel = 0;
      while (collideRect(platforms.platform1, player)) {
        player.y+=.1
      }      
      player.isceiled = true
    }

    if (player.isjumping && player.yvel > 0) {
      player.isjumping = false
    }


    if (keyboard.w == true && (player.isgrounded == true)) {
      player.isjumping = true;
      player.yvel = -1 * player.jumpheight;
    }

    if (keyboard.w == true && (player.isleftwalled == true)) {
      player.isjumping = true;
      player.yvel = -1 * player.jumpheight;
      player.xvel = 6
      
    }

    if (keyboard.w == true && (player.isrightwalled == true)) {
      player.isjumping = true;
      player.yvel = -1 * player.jumpheight;
      player.xvel = -6
      
    }

    

    player.xPhysics()

    if (player.isjumping) {
      player.gravity = .12
    }
    else if (player.isrightwalled || player.isleftwalled) {
      player.gravity = .1
    }
    else {
      player.gravity = .15
    }

  }
  
}

var camera

var platforms = {
  platform1:{
    x:50,
    y:200,
    width:200,
    height:250
  },

  draw: function() {
    ctx.fillStyle = "white";
    ctx.fillRect(platforms.platform1.x, platforms.platform1.y, platforms.platform1.width, platforms.platform1.height)
  },
}