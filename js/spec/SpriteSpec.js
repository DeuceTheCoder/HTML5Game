describe("Sprite", function () {
    var context;
    var imageSource;
    var sprite;

    beforeEach(function () {
        context = {};
        imageSource = "";
        sprite = new Sprite(context, imageSource);
    });

    it("should return the width of its image", function () {
        var image = {width: 5};
        sprite.image = image;
        expect(sprite.getWidth()).toEqual(5);
    });

    it("should return the height of its image", function () {
        var image = {height: 5};
        sprite.image = image;
        expect(sprite.getHeight()).toEqual(5);
    });
});