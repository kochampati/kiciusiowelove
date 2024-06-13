let kitties = document.querySelector("#totalClicls");
let kittiesPerClick = document.querySelector("#kittiesPerClickCount");

function kittyClick(){
    document.querySelector("#totalClicks").innerHTML = kittiesPerClick++;
}
