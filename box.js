class box {
    constructor(x, y, width, height){
        var Option = {
            restitution: 0.5,
            denstiy: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, Option);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rotate(angle)
        translate(pos.x,pos.y);
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop()
    }
}
