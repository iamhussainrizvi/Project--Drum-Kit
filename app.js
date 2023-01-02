// alert("working");

function playSound(val){
    val=val.toLowerCase();
    let audio;
    const heroImageElement = document.querySelector(".kit-image");
    heroImageElement.style.transform = "scale(1.01)";
    
    const timeout= setTimeout(() => {
        heroImageElement.style.transform = "scale(1)";
        clearTimeout(timeout);
    }, 50);
    
    // heroImageElement.style.transform = "scale(1)"
    switch(val){

        case "w":
            audio = new Audio("sounds/ride.mp3");
            audio.play();
            break;
        
        case "5":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        case "a":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "2":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
                break;
        case "1":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "3":
            audio = new Audio("sounds/Hi-Hat.mp3");
            audio.play();                
            break;
        case "s":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case"t":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.error("correct key not pressed");
            break;
        
    }
}

window.addEventListener("keydown",(e)=>{
    const val = e.key;
    playSound(val);    
    });


const clickable =document.querySelectorAll(".clickable");

clickable.forEach(function(key){
    key.addEventListener("click", function(){
        const val = this.innerText;
        // console.log(val);
        playSound(val);
    });
});
