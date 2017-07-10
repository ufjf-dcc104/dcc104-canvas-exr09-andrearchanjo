function Map(rows, collumns) {
  this.SIZE = 32;
  this.victory = false;
  this.cells = [];
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < collumns; c++) {
      this.cells[r][c] = 0;
    }
  }
}

Map.prototype.desenhar = function (ctx, img) {

  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==1){
        ctx.fillStyle = "brown";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.fillStroke = "black";
        ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      if(this.cells[r][c]==2){
        /*ctx.fillStyle = "white";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);*/
        ctx.fillStroke = "black";
        ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      if(this.cells[r][c]==3){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.fillStroke = "black";
        ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      if(this.cells[r][c] == 4){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.fillStroke = "black";
        ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
      if(this.cells[r][c] == 5){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.fillStroke = "black";
        ctx.strokeRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }

  

};

/*Map.prototype.colidiuCom = function (alvo, resolveColisao) {
    for (var i = 0; i < this.tesouros.length; i++) {
      if(this.tesouros[i].colidiuCom(alvo)){
        resolveColisao(this.tesouros[i], alvo);
      }
    }
};

Map.prototype.colidiuComTesouro = function(pc){
  for(var i = this.tesouros.length-1; i>=0; i--){

    this.colidiuCom(pc,
        function(tesouro){
            tesouro.visivel = true;
            console.log("aqui");
        }
      );
  }
};*/

Map.prototype.showInformations = function(ctx){
  
  if(this.victory){
    ctx.fillStyle = "blue";
    ctx.fillText("Vitória", 285, 225);
  }

}

Map.prototype.getCells = function () {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      console.log(r);
      console.log(c);
    }
  }
};

Map.prototype.setCells = function (newCells) {
  for (var i = 0; i < newCells.length; i++) {
    for (var j = 0; j < newCells[i].length; j++) {
      switch (newCells[i][j]) {
        case 1:
          this.cells[i][j] = 1;
          break;
        case 2:
          this.cells[i][j] = 2;
          break;
        case 3:
          this.cells[i][j] = 3;
          break;
        case 4:
          this.cells[i][j] = 4;
          break;
        case 5:
          this.cells[i][j] = 5;
          break;
        default:
          this.cells[i][j] = 0;
      }
    }
  }
};

/*Map.prototype.mover = function (dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].mover(this,dt);
  }
};
Map.prototype.perseguir = function (alvo) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].perseguir(alvo);
  }
};*/
