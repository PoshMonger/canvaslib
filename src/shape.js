


export class LittleRed{
    constructor(x,y,dx,dy,radius,color){
    
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}
    
    
    draw(){  var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
             ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();}
    
    update(){
     
        this.x += this.dx;
        this.y +=this.dy;
        this.dx = this.dx *.99;
        this.dy = this.dy * .99;

        if (this.y > canvas.height|| this.y < 0){

            this.dy = -this.dy
          
          }
          if(this.x > canvas.width || this.x  < 0){
          
            this.dx = -this.dx
          
          
          }



        }
    }
        
    
   
    


export class BigBlue{
    constructor(x,y,dx,dy,radius,color){
    
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}
    
    
    draw(){  var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    
    
             ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();}
    
    update(){
    
        
        this.x += this.dx;
        this.y +=this.dy;


        if (this.y > canvas.height|| this.y < 0){

            this.dy = -this.dy
          
          }
          if(this.x > canvas.width || this.x  < 0){
          
            this.dx = -this.dx
          
          
          }



        }
    }
        
    
