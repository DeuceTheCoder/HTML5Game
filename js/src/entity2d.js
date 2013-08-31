"use strict";

function Entity2d(position, sprite) {
    this.position = position;
    this.sprite = sprite;
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

Entity2d.prototype.moveLeft = function(leftBound) {
    if (this.getX() > leftBound) {
        return this.position.addX(-this.step);
    }
};

Entity2d.prototype.moveRight = function(rightBound) {
    if (this.getX() < (rightBound - this.sprite.getWidth())) {
       return this.position.addX(this.step);
    }
};

Entity2d.prototype.moveUp = function(topBound) {
    if(this.getY() > topBound) {
        return this.position.addY(-this.step);
    }
};

Entity2d.prototype.moveDown = function(bottomBound) {
    if (this.getY() < (bottomBound - this.sprite.getHeight())) {
        return this.position.addY(this.step);
    }
};

