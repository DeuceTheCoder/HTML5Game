"use strict";

function Entity2d(position, sprite, canvas) {
    this.position = position;
    this.sprite = sprite;
    this.canvas = canvas;
    this.step = 5;
}

Entity2d.prototype.draw = function() {
    this.sprite.draw(this.position);
};

Entity2d.prototype.getX = function() {
    return this.position.getX();
};

Entity2d.prototype.getY = function() {
    return this.position.getY();
};

Entity2d.prototype.moveLeft = function() {
    if (this.getX() > 0) {
        return this.position.addX(-this.step);
    }
};

Entity2d.prototype.moveRight = function() {
    if (this.getX() < (this.canvas.width - this.sprite.getWidth())) {
       return this.position.addX(this.step);
    }
};

Entity2d.prototype.moveUp = function() {
    if(this.getY() > 0) {
        return this.position.addY(-this.step);
    }
};

Entity2d.prototype.moveDown = function() {
    if (this.getY() < (this.canvas.height - this.sprite.getHeight())) {
        return this.position.addY(this.step);
    }
};

