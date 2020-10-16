class Ground{
    constructor(){
        var option = {
            'isStatic':true
        }
       this.body = Bodies.rectangle(400, 650, 800, 10, option);
       World.add(world, this.body);
    }
   display(){
       rectMode(CENTER);
       fill(80, 80, 80);
       rect(this.body.position.x, this.body.position.y, 800, 10);
   }
}