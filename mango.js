
class mango{
    constructor(x, y, width, height) {

var options={
        isStatic :true,
        restitution:0,
        friction:1,

}
this.mango = loadImage('Plucking+mangoes/mango.png');
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
translate(pos.x, pos.y);
rotate(angle);
ellipseMode(CENTER);
strokeWeight(4);
fill(255);
rect(0, 0, this.width, this.height);
}
};