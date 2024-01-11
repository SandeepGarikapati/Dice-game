var random_number;
random_number =Math.floor(Math.random()*6)+1;
var random_src= "dice"+random_number+".png";
var changed_src= "/Dicee Challenge - Starting Files/images/"+random_src;

document.querySelectorAll("img")[0].setAttribute("src",changed_src);


var random_number_2= Math.floor(Math.random()*6)+1;
var changed_src = "/Dicee Challenge - Starting Files/images/"+"dice"+random_number_2+".png";
document.querySelectorAll("img")[1].setAttribute("src",changed_src);

if(random_number > random_number_2)
{
    document.getElementById("sample").innerHTML="Player1 Wins";
}
else if(random_number == random_number_2)
{
    document.getElementById("sample").innerHTML="It is draw";
}

else{
    document.getElementById("sample").innerHTML="Player2 wins";
}