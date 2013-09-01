"use strict";

var game = game || {};

game.canvas = document.getElementById('gameOne');
game.context = game.canvas.getContext('2d');

game.cursor = new Vector2d(200, 100);
game.oldCursor = new Vector2d(200, 100);
game.mario = new Entity2d(new Vector2d(200, 100),
                    new Sprite(game.context, 'http://www.dan-dare.org/Dan%20Mario/SMB1MarioSmallAni.gif'));

(function (window) {
    function gameLoop() {
        game.context.fillStyle = "orange";
        game.context.rect(0, 0, 400, 200);
        game.context.fill();
        game.mario.draw();
    }
    window.setInterval(gameLoop, 1000 / 60); // 60fps
}(window));

$(document.body).on('keydown', function (event) {
    var boundaryMap = {37: 0, 38: 0, 39: game.canvas.width, 40: game.canvas.height};
    var movementMap = {37: game.mario.moveLeft, 38: game.mario.moveUp,
                    39: game.mario.moveRight, 40: game.mario.moveDown};
    movementMap[event.which].call(game.mario, boundaryMap[event.which]);
});

game.canvas.addEventListener('click', function (event) {
    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return new Vector2d(event.clientX - rect.left, event.clientY - rect.top);
    }

    game.oldCursor = game.cursor;
    game.cursor = getMousePos(game.canvas, event);
}, false);

