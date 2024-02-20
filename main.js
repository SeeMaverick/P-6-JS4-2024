const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = 'lightOff.png';
        lightswitch.src = 'switchOff.png';
        status.textContent = 'TURN ON THE LIGHT';
        document.body.style.backgroundImage = "url('download.png')";
        sheldon.style.visibility = 'hidden';
        vanguy.style.visibility = 'hidden';
        like.style.visibility = 'hidden';
        irony.style.visibility = 'hidden';

        const audio = new Audio("WhatsApp CarDrip Car (HIGHEST QUALITY).mp3");

            audio.oncanplaythrough = function(){
            audio.play();
        }
            audio.loop = true;
            audio.onended = function(){
            audio.play();
        }

    }else{
        lightbulb.src = 'lightOn.png';
        lightswitch.src = 'switchOn.png';
        status.textContent = 'you DID IT! Now, turn OFF the light.';
        document.body.style.backgroundImage = "url('kidd-gow.gif')";
        sheldon.style.visibility = 'visible';
        vanguy.style.visibility = 'visible';
        like.style.visibility = 'visible';
        irony.style.visibility = 'visible';
    }
    isLightOn = !isLightOn;
}

);