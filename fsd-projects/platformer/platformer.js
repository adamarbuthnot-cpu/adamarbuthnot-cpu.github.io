$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid(300);


    // TODO 2 - Create Platforms
createPlatform(100,700,200,20, "red")

createPlatform(400,600,200,10,"red")

createPlatform(800,600,200,12, "red")

createPlatform(100,500,200,30,)

createPlatform(700, 600, 62, 190);
    // TODO 3 - Create Collectables
createCollectable("steve",200,600);

createCollectable("diamond", 500, 500, 0.5, 0.7);

createCollectable("grace", 900, 500, 0.5, 0.7);
   createCollectable("grace", 200, 400, 0.5, 0.7)

    // TODO 4 - Create Cannons
createCannon("right", 700, 2000,)


  createCannon("right", 500, 1600)
    
   createCannon("left",300, 1300)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
