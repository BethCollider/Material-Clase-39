class Game {
  constructor() {

    //Boton reload
   /* this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    //Tablero y puntuacion
    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");*/
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

   //Construir boton de reload

    /*this.resetTitle.html("Reiniciar juego");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);*/

     //Diseño del tablero de Puntuacion y ranking
    /*this.leadeboardTitle.html("Puntuación");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 40);

    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 80);

    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);*/
  }

  play() {
    this.handleElements();
    //Activa la funcion del boton reload
   // this.handleResetButton();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);
      //Mostrar el tablero de ranking
     // this.showLeaderboard();

      //índice de la matriz
      var index = 0;
      for (var plr in allPlayers) {
        //agrega 1 al índice para cada bucle
        index = index + 1;

        //utilizar los datos de la base de datos para mostrar los autos en las direcciones x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          // cambiar la posición de la cámara en la dirección y
          camera.position.y = cars[index - 1].position.y;
        }
      }

      //  manejando eventos teclado
      this.handlePlayerControls();

      drawSprites();
    }
  }
//Reinicio de la partida con el botton de reload
 /*handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        carAtEnd:0,
        playerCount:0,
        gameState:0,
        players:{}
      });
      window.location.reload();
    })
  }*/

  //Muestra en el tablero la pocision de los jugadores

  /*showLeaderboard() {
    var leader1, leader2;
    var players = Object.values(allPlayers);
    //Se ndica cual es el jugador 1
    if (
      (players[0].rank === 0 && players[1].rank === 0) ||
      players[0].rank === 1
    ) {
      // &emsp;    esta etiqueta se utiliza para mostrar cuatro espacios
      leader1 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;

      leader2 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;
    }
    //Se indica cual es el jugador 2
    if (players[1].rank === 1) {
      leader1 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;

      leader2 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;
    }
    
    this.leader1.html(leader1);
    this.leader2.html(leader2);
  }*/

  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
     
    //Incluir desplazamiento hacia los lados con la flechas
   /* if (keyIsDown(LEFT_ARROW)&& player.positionX > width / 3 - 50) {
      player.positionX -= 5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW)&& player.positionX < width / 2 + 300) {
      player.positionX += 5;
      player.update();
    }*/


  }
}
