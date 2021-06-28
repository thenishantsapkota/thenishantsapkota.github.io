function MyFunction()
    {
        document.getElementById("name").innerHTML = "RickRoll'd";
        document.getElementById("name").style.color = "wheat";
        document.getElementById("text").innerHTML  =  "You got rickrolled. Ha! Yet again"
        document.getElementById("name").style.fontFamily = "Cascadia Code";
        document.getElementById("dp").src = 'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif';
        document.getElementById("mailbt").innerHTML = "randomemail@email.com";
        alert("Changed!");
        sound = document.getElementById('lol');
        sound.play();
    }

function MyFunction1()
    {
        document.getElementById("name").innerHTML = "Nishant Sapkota";
        document.getElementById("text").innerHTML = "Hello there! This is me. I love computers, books, nature, space. Love to spend time alone infront of my Computer.\
        Currently Studying BE Computer in MBMAN.Built this site to test my HTML and CSS skills. Turns out I am not as good as I thought I was. :("
        document.getElementById("name").style.color = "gold";
        document.getElementById("name").style.fontFamily = "Arvo";
        document.getElementById("dp").src = 'dp.jpg';
        document.getElementById("mailbt").innerHTML = "snishant306@gmail.com";
        alert("Reverted!")
        sound = document.getElementById('lol');
        sound.pause();
        sound.currentTime = 0;
    }
