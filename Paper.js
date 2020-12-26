var object_options
class Paper{

    constructor(x,y,r) {

        object_options = {
            isStatic : false,
            friction: 0.5,
            density: 1.2,
            restitution: 0.3

            }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, object_options)
        World.add(world, this.body);
        this.image = loadImage("images/paper.png");
        }
        display(){
            var paperpos=this.body.position

            push()
            translate(paperpos.x, paperpos.y);
            imageMode(CENTER);
            strokeWeight(3);
            fill(255,0,255);
            image(this.image,0,0,this.r,this.r);
            pop();
        }
}