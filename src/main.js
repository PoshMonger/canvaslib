
import {getcords,player1,player2,} from './controls';
import { shootdown, shootup, shootleft,shootright} from './player';

    
getcords();
function animate(){
    
   
    player1.update();
  player1.draw()
  
  
   requestAnimationFrame(animate)
}
animate();

function animatefg(){
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

