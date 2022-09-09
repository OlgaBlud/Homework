// квадрат
var square = document.getElementById("squareId");
var color = prompt('Which color of rectangle do you want?');
square.style.background = color;
var width = prompt('Set width, px');
square.style.width = width + "px";
var height = prompt('Set height, px');
square.style.height = height + "px";
var border = prompt('Select border  dashed, double or ridge');
square.style.border = border;
// калькулятор 1
var x = prompt('Set first number');
var y = prompt('Set second number');
x = parseFloat(x);
y = parseFloat(y);
var result = x + y;
alert(result);
document.getElementById('squareId').innerHTML=result;




   
