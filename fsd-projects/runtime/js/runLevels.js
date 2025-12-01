var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    sawBladeHitZone.x = 400;
    sawBladeHitZone.y = 371;
    game.addGameItem(sawBladeHitZone);

    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.addChild(obstacleImage);
   
   

function createSawBlade(x, y) {
  var hitZoneSize = 25;
  var damageFromObstacle = 10;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
  sawBladeHitZone.x = x;
  sawBladeHitZone.y = y;
  game.addGameItem(sawBladeHitZone);

  var obstacleImage = draw.bitmap("img/sawblade.png");
  obstacleImage.x = -25;
  obstacleImage.y = -25;
  sawBladeHitZone.addChild(obstacleImage);
}

createSawBlade(800, 450);
createSawBlade(1000, 450);
createSawBlade(2000, 371);
createSawBlade(2200, 450);
createSawBlade(2300, 371);
createSawBlade(2900, 450);
createSawBlade(3000, 450);
createSawBlade(3400, 371);
createSawBlade(3500, 450);
createSawBlade(3600, 371);
    createSawBlade(3800, 371);
        createSawBlade(3900, 371);
            createSawBlade(4000, 371);
                createSawBlade(4200, 371);
                    createSawBlade(4290, 371);
function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);

    enemy.x = x;
    enemy.y = y;

    enemy.velocityX = -2;        
    enemy.rotationalVelocity = 5;

    enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
    };

    enemy.onProjectileCollision = function () {
        game.increaseScore(200);
        enemy.fadeOut();
    };

    game.addGameItem(enemy);
}

createEnemy(400, groundY - 50);
createEnemy(800, groundY - 50);
createEnemy(1200, groundY - 50);
createEnemy(1600, groundY - 50);
createEnemy(1100, groundY - 50);
createEnemy(2000, groundY - 50);
createEnemy(1500, groundY - 50);
createEnemy(1300, groundY - 50);
createEnemy(1700, groundY - 50);
createEnemy(2780, groundY - 50);
createEnemy(2700, groundY - 50);
createEnemy(2800, groundY - 50);
createEnemy(3700, groundY - 50);

function createReward(x, y) {
    var reward = game.createGameItem("reward", 25);
    var coin = draw.bitmap("img/coin.png");
    coin.x = -25;
    coin.y = -25;
    reward.addChild(coin);

    reward.x = x;
    reward.y = y;
   reward.velocityX
     reward.velocityX = -2;        
    reward.rotationalVelocity = 5;

    reward.onPlayerCollision = function() {
        game.increaseScore(800);
        reward.fadeOut();
    };

    reward.onProjectileCollision = function() {
        reward.fadeOut();
    };

    game.addGameItem(reward);
}



createReward(1000, groundY - 50)
createReward(4200, groundY - 50)
createReward(1000, groundY - 50)
createReward(1000, groundY - 50)
createReward(1000, groundY - 50)


    function startLevel() {
      // TODO 13 goes below here


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = runLevels;
}
