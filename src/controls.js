


import {player1, shootdown, shootleft, shootright, shootup} from './player'



class Supersaiyan{
    constructor(player1xcord,player1ycord,dx,dy,radius,color){
    this.x =player1xcord;
    this.y=player1ycord;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.color= color}

    
    draw(){  
      let canvas3 = document.getElementById('bg');
      let ctx3 = canvas3.getContext('2d');
    
      
      ctx3.fillStyle = 'rgba(255,255,255, .2)'
      ctx3.fillRect(0,0, canvas3.width, canvas3.height);
        
             ctx3.fillStyle = this.color;
            ctx3.beginPath();
            ctx3.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
            ctx3.closePath();
            ctx3.fill();}

     
    
    update(){  
      let canvas3 = document.getElementById('bg');
    
    
       
        this.x += this.dx;
        this.y +=this.dy;
        this.dx = this.dx *.99;
        this.dy = this.dy * .99;

        if (this.y > canvas3.height|| this.y < 0){

            this.dy = -this.dy
          
          }
          if(this.x > canvas3.width || this.x  < 0){
          
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
                  

            function animatefg1(){
            
                let myparticle = new Supersaiyan(player1.x,player1.y,player1.dx,player1.dy,15,'red');
               
                myparticle.draw();
                myparticle.update();
             
              
                

              

               requestAnimationFrame(animatefg1)}
               
            
            
            animatefg1();
            
        
        break;
        case 37:
            
           shootleft.x=player1.x
           shootleft.y=player1.y
           shootleft.dx = -5;
           shootleft.dy =0;
           shootleft.radius = 5;
           shootleft.color ='red'

						break;
        case 38:
           
            shootdown.x=player1.x
            shootdown.y=player1.y
            shootdown.dx = 0;
            shootdown.dy =-5;
            shootdown.radius = 5;
            shootdown.color ='red'
					break;
        case 39:
            shootright.x=player1.x
           shootright.y=player1.y
           shootright.dx = 5;
           shootright.dy =0;
           shootright.radius = 5;
           shootright.color ='red'
						break;
        case 40:
            shootup.x=player1.x
            shootup.y=player1.y
            shootup.dx = 0;
            shootup.dy =5;
            shootup.radius = 5;
            shootup.color ='red'
					break;
    
    }}

}
   

   export {player1,getcords}