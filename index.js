let Game = {

    canvas : null,
    entities : [],
    pick : null,
    tick : null,

    space : false,

    start : function()
    {
        Game.canvas = document.getElementById("container").getContext("2d");
        Game.pick = new Entity(0,0,584*222/666,222, false);
        Game.pick.addSprite("pioche.png");
        Game.pick.addSprite("pioche_bas.png");
        Game.entities.push(Game.pick);
        Game.tick = setInterval(Game.update, 30);

        document.addEventListener("keydown", (evt) => {
            Game.input(evt, "down");
        });

        document.addEventListener("keyup", (evt) => {
            Game.input(evt, "up");
        });
    },

    input : function(evt, dir)
    {
        if(Game.space == false && dir == "down" && evt.keyCode == 32)
            Game.space = true;
        else if(Game.space && dir == "up" && evt.keyCode == 32)
            Game.space = false;
        
    },

    update : function()
    {
        if(Game.space)
            Game.pick.frame = 1;
        else 
            Game.pick.frame = 0;
        Game.entities.forEach(element => {
            element.draw(Game.canvas);
        });
    },
};

window.addEventListener("load", Game.start);