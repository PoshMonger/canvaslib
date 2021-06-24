
import {getcords,player1,} from './controls';
import { shootdown, shootup, shootleft,shootright} from './player';

    getcords()
 
function animate(){
    
   
    player1.update();
  player1.draw()
  
  
   requestAnimationFrame(animate)
}
animate();

function animatefg(){
    let canvas2 = document.getElementById('fg1');
    let ctx2 = canvas2.getContext('2d');
    ctx2.clearRect(0,0,canvas2.width,canvas2.height)


    shootdown.draw();
    shootdown.update();
    shootup.draw();
    shootup.update();
    shootleft.draw();
    shootleft.update();
    shootright.draw();
    shootright.update();
    

    
   
    requestAnimationFrame(animatefg)

}
animatefg()
