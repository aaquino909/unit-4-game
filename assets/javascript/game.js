
$(document).ready(function() {

var randomNum =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var wins = 0;
var losses = 0;
    
$(".randomNum").text("Random Number: "+ randomNum);

var doggie1Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var doggie2Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var doggie3Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var doggie4Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("dog1 " + doggie1Num);
console.log("dog2 " + doggie2Num);
console.log("dog3 " + doggie3Num);
console.log("dog4 " + doggie4Num);
var doggie1Total = 0;
var doggie2Total = 0;
var doggie3Total = 0;
var doggie4Total = 0;

function startOver(){
randomNum =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
doggie1Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
doggie2Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
doggie3Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
doggie4Num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("dog1 " + doggie1Num);
console.log("dog2 " + doggie2Num);
console.log("dog3 " + doggie3Num);
console.log("dog4 " + doggie4Num);
doggie1Total = 0;
doggie2Total = 0;
doggie3Total = 0;
doggie4Total = 0;
total = 0;
$(".totalScore").text("Your total score is: ");

$(".randomNum").text("Random Number: "+ randomNum);

}

function dog(button){
    var counter = 0;

$(button).on("click", function() {  
    var clickedPic = $(button).attr("alt");  //stores "alt" attribute to clickedPic

if (clickedPic === "dog1"){ //if dog1 = "alt"= dog1 then add to counter
    counter += 1;
    doggie1Total = doggie1Num * counter;
    var total = doggie1Total + doggie2Total + doggie3Total+ doggie4Total;
    }
if (clickedPic === "dog2"){ //if dog1 = "alt"= dog1 then add to counter
    counter += 1;
    doggie2Total = doggie2Num * counter;
    var total = doggie1Total + doggie2Total + doggie3Total+ doggie4Total;
    }
if (clickedPic === "dog3"){ //if dog1 = "alt"= dog1 then add to counter
    counter += 1;
    doggie3Total = doggie3Num * counter;
    var total = doggie1Total + doggie2Total + doggie3Total+ doggie4Total;
    }
if (clickedPic === "dog4"){ //if dog1 = "alt"= dog1 then add to counter
    counter += 1;
    doggie4Total = doggie4Num * counter;
    var total = doggie1Total + doggie2Total + doggie3Total+ doggie4Total;
    }
    $(".totalScore").text("Your total score is: "+ total);
if (total === randomNum){
    alert("you're a winner");
    wins ++;
    console.log(wins);
    $(".wins").text("Wins: " + wins);
    startOver();
} else if (total >= randomNum){
    alert("you lose!");
    losses ++;
    console.log(losses);
    $(".losses").text("Losses: " + losses);
    startOver();
}


});
}
dog($(".doggie1"));
dog($(".doggie2"));
dog($(".doggie3"));
dog($(".doggie4"));





}); //documentreadyfunction