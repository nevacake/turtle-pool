console.log("Hello!")
var disabled = false;
if (localStorage.count) {
    var s = Number(localStorage.count);
} else {
    var s = 0;
}
var i = 1;
var ips = 0;
var claimed = false;
var sound = document.getElementById("aud")
var so = document.getElementById("s")
setInterval(iips, 1000);
setInterval(ram, 0);
function ram () {
    localStorage.count = s;
    if (s > 1000) {
        if (claimed == false) {
            document.getElementById("t").innerHTML = "1000+ points! reward: turtle toy + 50"
            i = i + 50;
            document.getElementById("i").innerHTML = "turtles per invite (turtle toy) " + i.toString();
            claimed = true;
        }
    } else {
        document.getElementById("t").innerHTML = ""
    }
}

function iips() {
    s = s + ips;
    if (s < 1000) {
        document.getElementById("b").innerHTML = "points: " + s.toString()
    } else {
        document.getElementById("b").innerHTML = "points: " + (s/1000).toString() + " thousand"
    }
    
}
function something() {
    s = s + i;
    if (s < 1000) {
        document.getElementById("b").innerHTML = "points: " + s.toString()
    } else {
        document.getElementById("b").innerHTML = "points: " + (s/1000).toString() + " thousand"
    }
    sound.play()
}

function nohov(el) {
    document.getElementById(el).style.color = "black"
}

function hov(el) {
    document.getElementById(el).style.color = "grey"
}
function x1() {
    if (s > 4) {
        s = s - 5
        i = i + 1;
        if (s < 1000) {
        document.getElementById("b").innerHTML = "points: " + s.toString()
    } else {
        document.getElementById("b").innerHTML = "points: " + (s/1000).toString() + " thousand"
    }
        document.getElementById("i").innerHTML = "turtles per invite (turtle toy): " + i.toString();
    }

}

function x2() {
    if (s > 4) {
        ips = ips + 1;
        s = s - 5;
        document.getElementById("ips").innerHTML = "turtles per second (turtle food): " + ips.toString();
        if (s < 1000) {
        document.getElementById("b").innerHTML = "points: " + s.toString()
    } else {
        document.getElementById("b").innerHTML = "points: " + (s/1000).toString() + " thousand"
    }
        
    }
}