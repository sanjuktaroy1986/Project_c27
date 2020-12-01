class Rope{

constructor(bodyA,PB){

var options={
bodyA:bodyA,
pointB:PB
}

this.link=Constraint.create(options);
World.add(myworld,this.link);

}

display(){
    push()
strokeWeight(4);
stroke("red");
line(this.link.pointB.x,this.link.pointB.y, this.link.bodyA.position.x,this.link.bodyA.position.y);
pop()

}


}