var randomNumber =Math.floor(Math.random()*6)+1;

var randomPhotos = "images/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomPhotos);


var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomPhotos2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomPhotos2);


if (randomNumber > randomNumber2){
  document.querySelector('h1').innerHTML = "🏁Player 1 won";
}
else if( randomNumber2 > randomNumber) {
  document.querySelector('h1').innerHTML = "Player 2 won🏁";
}

else {
  document.querySelector('h1').innerHTML = "🏁Draw!🏁";
}
