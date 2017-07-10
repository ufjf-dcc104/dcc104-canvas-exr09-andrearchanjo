var canvas;
var ctx;
var map;
var pc;
var dt;
var images;
var anterior = 0;
var frame = 0;
var i = 1;//posiçao inicial em relação à cells (2)
var j = 1;//posiçao inicial em relação à cells (2)

function init(){
  canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 520;
  canvas.height = 520;
  ctx = canvas.getContext("2d");
  images = new ImageLoader();
  images.load("pc","pc.png");
  images.load("tesouro", "tesouro.png");
  map = new Map(Math.floor(canvas.height/40), Math.floor(canvas.width/40));
  map.images = images;
  map.setCells([
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,1,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,1,2,2,1],
    [1,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,1],
    [1,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]);
  pc = new Sprite();
  pc.y = (i+0.5)*map.SIZE;
  pc.x = (j+0.5)*map.SIZE;
  pc.images = images;
  initControls();
  requestAnimationFrame(passo);
}

function passo(t){
  dt = (t-anterior)/1000;
  requestAnimationFrame(passo);

  ctx.clearRect(0,0, canvas.width, canvas.height);

  map.showInformations(ctx);

  pc.mover(map, dt);
  pc.tempoPulo(dt);

  map.desenhar(ctx, images);
  pc.desenhar(ctx);

  anterior = t;
  //ctx.restore();
  frame = (frame<9)?frame:1;
  //images.drawFrame(ctx,"pc",8,Math.floor(frame),0,0,64);
  frame+=2*dt;
}

function initControls(){
  addEventListener('keydown', function(e){
    switch (e.keyCode) {
      case 32:
        if(pc.chao){
          pc.vy = -80;
          pc.pose = 3;
          pc.pulo = 2;
        }
        e.preventDefault();
        break;
      case 37:
        pc.ax = -50;
        pc.pose = 2;
        e.preventDefault();
        break;
      case 39:
        pc.ax = 50;
        pc.pose = 0;
        e.preventDefault();
        break;
      default:
        e.preventDefault();
    }
  });
  addEventListener('keyup', function(e){
    switch (e.keyCode) {
      case 37:
        pc.ax = 0;
        pc.vx = 0;
        pc.pose = 6;
        break;
      case 39:
        pc.ax = 0;
        pc.vx = 0;
        pc.pose = 5;
        break;
      default:

    }
  });
}
