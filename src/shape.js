

export class LittleRed{
    constructor(x,y,dx,dy,radius,color){
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}
    
    
    draw(){  
      let canvas = document.getElementById('fg');
      let ctx = canvas.getContext('2d');
      
      ctx.clearRect(0,0,canvas.width,canvas.height);
        
    
             ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();}
    
    update(){  
      let canvas = document.getElementById('fg');
    
       
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
    constructor(x,y,dx,dy,radius,color,){
 
 
 
      
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}
    
    
    draw(){  let canvas2 = document.getElementById('fg1');
    let ctx2 = canvas2.getContext('2d');

 
             ctx2.fillStyle = this.color;
            ctx2.beginPath();
            ctx2.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx2.closePath();
            ctx2.fill();}
    
    update(){
    
      let canvas2 = document.getElementById('fg1');
        this.x += this.dx;
        this.y +=this.dy;
        this.radius = this.radius*.99;


        if (this.y > canvas2.height|| this.y < 0){

            this.dy = -this.dy
          
          }
          if(this.x > canvas2.width || this.x  < 0){
          
            this.dx = -this.dx
          
          
          }

        }
    }
        
