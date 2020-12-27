class Rectangles{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = "coral";
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        translate(pos.x , pos.y);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}