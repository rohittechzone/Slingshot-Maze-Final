class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':1.0
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);

        pop();
        
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          tint(255,this.Visiblity);
          pop();
      }
    }
  }