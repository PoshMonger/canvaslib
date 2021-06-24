


import {player1,player2,player3, shootdown, shootleft, shootright, shootup} from './player'



class particle{
    constructor(player1xcord,player1ycord,dx,dy,radius,color){
    this.x =player1xcord;
    this.y=player1ycord;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}

    
    draw(){  
      var canvas = document.getElementById('fg1');
      var ctx2 = canvas.getContext('2d');
    
      ctx2.fillStyle = 'rgba(255,255,255, .2)'
      ctx2.fillRect(0,0, canvas.width, canvas.height);
        
             ctx2.fillStyle = this.color;
            ctx2.beginPath();
            ctx2.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx2.closePath();
            ctx2.fill();}

     
    
    update(){  
      var canvas = document.getElementById('fg1');
    
    
       
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

function getcords(){

window.addEventListener("keydown", moveSomething, false);
    function moveSomething(e) {
    
        switch (e.keyCode) {
            case 65: //a
                player1.dx --;
                shootleft.dx --;
                shootright.dx --;
                shootdown.dx --;
                shootup.dx --;
                break;
            case 87: //w
                player1.dy --;
                shootup.dx --;
                shootdown.dx --;
                shootright.dx --;
                shootleft.dx --;
                break;
            case 68: //d
                player1.dx ++;
                shootright.dx ++;
                shootdown.dx ++;
                shootleft.dx ++;
                shootup.dx ++;

                break;
            case 83: //s
                player1.dy ++;
                shootdown.dy ++;
                shootup.dy ++;
                shootleft.dy ++;
                shootright.dy ++;

               
                break;
               

         
                case 32:
                  

            function animatefg(){
    
                let myparticle = new particle(player1.x,player1.y,50,10,15,'red');
                    
                myparticle.draw();
                myparticle.update();
             

                requestAnimationFrame(animatefg)
            
            }
            animatefg()
            
        
        break;
        case 37:
            
           shootleft.x=player1.x
           shootleft.y=player1.y
           shootleft.dx = -5;
           shootleft.dy =0;
           shootleft.radius = 5;

						break;
        case 38:
           
            shootdown.x=player1.x
            shootdown.y=player1.y
            shootdown.dx = 0;
            shootdown.dy =-5;
            shootdown.radius = 5;
					break;
        case 39:
            shootright.x=player1.x
           shootright.y=player1.y
           shootright.dx = 5;
           shootright.dy =0;
           shootright.radius = 5;
						break;
        case 40:
            shootup.x=player1.x
            shootup.y=player1.y
            shootup.dx = 0;
            shootup.dy =5;
            shootup.radius = 5;
					break;
    
    }}

}
   

   export {getcords,player1,player2,player3}