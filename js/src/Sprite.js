"use strict";

function Sprite(context, imageSource) {
    this.context = context;
    this.image = new Image();
    this.image.src = imageSource;

}

Sprite.prototype.draw = function(position) {
    this.context.drawImage(this.image, position.getX(), position.getY());
};

Sprite.prototype.getWidth = function() {
    return this.image.width;
};

Sprite.prototype.getHeight = function() {
    return this.image.height;
};