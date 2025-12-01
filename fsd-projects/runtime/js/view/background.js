var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        var background;
        var tree;
        var buildings = [];
        
        function render()  {
            background.removeAllChildren();

            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'grey');
            background.addChild(backgroundFill);
            
            var moon = draw.bitmap("img/moon.png");
            moon.x = 1400;
            moon.y =100;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);          
           
            for (var i = 0; i < 150; i++) {
                var size = Math.random() * 2 + 1; 
                var circle = draw.circle(size, "white", "LightGray", 1);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random() * 0.7; 
                background.addChild(circle);
            }

            // Buildings with different random heights
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 200 + Math.random() * 200; // height between 200 and 400
                var buildingWidth = 50 + Math.random() * 50; // width between 50 and 100
                var building = draw.rect(buildingWidth, buildingHeight, "LightBlue", "black", 1);
                building.x = i * 200;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            tree = draw.bitmap("img/tree.png");
            tree.x = 900;
            tree.y = groundY - 200; // adjust to stay above ground
            background.addChild(tree);
        }
        
        function update() {
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            tree.x -= 1;
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            for (var i = 0; i < buildings.length; i++) {
                buildings[i].x -= 1;
                if (buildings[i].x < -200) {
                    buildings[i].x = canvasWidth;
                }
            }
        }
        
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = background;
}
