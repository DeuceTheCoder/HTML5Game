describe("Entity2d", function () {
    var entity;
    var sprite;
    var initialX;
    var initialY;
    var initialPosition;

    beforeEach(function () {
        sprite = jasmine.createSpyObj('sprite', ['draw', 'getWidth', 'getHeight']);
        sprite.getWidth.andReturn(5);
        sprite.getHeight.andReturn(5);

        initialX = 0;
        initialY = 0;
        initialPosition = new Vector2d(initialX, initialY);
        entity = new Entity2d(initialPosition, sprite);
    });

    it("should draw its sprite", function () {
        entity.draw();
        expect(sprite.draw).toHaveBeenCalledWith(initialPosition);
    });

    it("should not be able to move beyond the rightmost boundary", function() {
        var rightEdge = sprite.getWidth();
        entity.moveRight(rightEdge);

        expect(entity.getX()).toEqual(initialPosition.getX());
    });

    it("should be able to move right if not at boundary", function() {
        var rightEdge = 100;
        entity.moveRight(rightEdge);

        expect(entity.getX()).toEqual(initialX + entity.step);
    });

    it("should not be able to move beyond the leftmost boundary", function() {
        var leftEdge = 0;

        entity.moveLeft(leftEdge);
        expect(entity.getX()).toEqual(initialX);
    });

    it("should be able to move left if not at boundary", function() {
        var leftEdge = -10;

        entity.moveLeft(leftEdge);
        expect(entity.getX()).toEqual(initialX - entity.step);
    });

    it("should not be able to move beyond the bottommost boundary", function() {
        var bottomEdge = sprite.getHeight();
        entity.moveDown(bottomEdge);

        expect(entity.getY()).toEqual(initialY);
    });

    it("should be able to move down if not at boundary", function() {
        var bottomEdge = 100;
        entity.moveDown(bottomEdge);

        expect(entity.getY()).toEqual(initialY + entity.step);
    });

    it("should not be able to move beyond the topmost boundary", function() {
        var topEdge = 0;

        entity.moveUp(topEdge);
        expect(entity.getY()).toEqual(initialY);
    });

    it("should be able to move up if not at boundary", function() {
        var topEdge = -10;

        entity.moveUp(topEdge);
        expect(entity.getY()).toEqual(initialY - entity.step);
    });
});