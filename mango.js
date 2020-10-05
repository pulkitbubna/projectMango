class mango{
    constructor(x, y,r) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
          
        }
        this.r = r
        this.y = y
        this.x = x
        this.body = Bodies.circle(this.x , this.y , this.r, options);
        
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER) 
        image(this.image, 0,0,this.r*2, this.r*2)
        pop();
      }
}