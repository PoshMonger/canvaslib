
import options from './options';
import {BigBlue} from "./shape"
import {LittleRed} from './shape';


let player1 = new LittleRed(options.bigslowx,
    options.bigslowy,
    options.bigslowdx,
    options.bigslowdy,
    options.bigslowradius,
    options.bigslowcolor);

let player2 = new BigBlue(options.bigslowx2,
    options.bigslowy2,
    options.bigslowdx2,
    options.bigslowdy2,
    options.bigslowradius2,
    options.bigslowcolor2);





    window.addEventListener("keydown", moveSomething, false);
    function moveSomething(e) {
    
        switch (e.keyCode) {
            case 65: //a
                player1.dx --;
                break;
            case 87: //w
                player1.dy --;
                break;
            case 68: //d
                player1.dx ++;
                break;
            case 83: //s
                player1.dy ++;
                break;
        }
    
    }
    
    
    
 
    


function animate(){
    

 player1.draw()
    player1.update()
   
   requestAnimationFrame(animate)
}
animate();

    console.log(player1.draw)


    