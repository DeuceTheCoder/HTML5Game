describe("Entity2d", function () {
    var entity;
    var position;
    var sprite;
    var canvas;

    beforeEach(function () {
        position = jasmine.createSpyObj('vector2d', ['getX', 'getY', 'addX', 'addY']);
        sprite = jasmine.createSpyObj('sprite', ['draw', 'getWidth', 'getHeight']);
        sprite.getWidth.andReturn(5);
        sprite.getHeight.andReturn(5);

        canvas = {width: 400, height: 200};
        entity = new Entity2d(position, sprite, canvas);
    });

    it("should draw its sprite", function () {
        entity.draw();
        expect(sprite.draw).toHaveBeenCalledWith(position);
    });

    it("should not be able to move beyond the rightmost boundary", function() {
        var initialX = canvas.width - sprite.getWidth();
        var rightEdge = new Vector2d(initialX, 100);
        var entity = new Entity2d(rightEdge, sprite, canvas);

        entity.moveRight();
        expect(entity.getX()).toEqual(initialX);
    });

    it("should not be able to move beyond the leftmost boundary", function() {
        var initialX = 0;
        var leftEdge = new Vector2d(initialX, 100);
        var entity = new Entity2d(leftEdge, sprite, canvas);

        entity.moveLeft();
        expect(entity.getX()).toEqual(initialX);
    });

    it("should not be able to move beyond the topmost boundary", function() {
        var initialY = 0;
        var topEdge = new Vector2d(100, initialY);
        var entity = new Entity2d(topEdge, sprite, canvas);

        entity.moveUp();
        expect(entity.getY()).toEqual(initialY);
    });

    it("should not be able to move beyond the bottommost boundary", function() {
        var initialY = canvas.height - sprite.getHeight();
        var bottomEdge = new Vector2d(100, initialY);
        var entity = new Entity2d(bottomEdge, sprite, canvas);

        entity.moveDown();
        expect(entity.getY()).toEqual(initialY);
    });
});