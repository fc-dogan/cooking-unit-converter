var gallon=parseInt(prompt("Gallons:"));
var convertGtoL=function (gallon){
return (gallon * 3.78541);
};

var result= convertGtoL(gallon);
alert(result);

var liter=parseInt(prompt("Liters:"));
var convertLtoG=function (liter){
return (liter * 0.264)};
var result2= convertLtoG(liter);
alert(result2);