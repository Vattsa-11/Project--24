class Paper {

    constructor () {

    var options = {
        isStatic: false,
        'restitution':0.3,
         'friction':0.3,
          'density':1.2

    }
    
    this.body = Bodies.circle(150,150,40,options);
    World.add(world,this.body);

    }
    display(){
        var pos = this.body.position ;
        push();
        translate(pos.x,pos.y);
        fill("pink");
        ellipse(0,0,40);
        pop(); 
    }

}