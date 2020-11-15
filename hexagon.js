class Hexagon{
    constructor(x, y, radius, sidenumber, angle) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Matter.Bodies.polygon(x, y, 6, radius, options)
        this.radius = radius
        this.sidenumber = sidenumber
        this.image = loadImage("sprites/Hexagon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}