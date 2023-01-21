let array = [];
function convertToRoman(num) {
while(num > 0){
if (num >= 1000) {
array.push("M");
num-=1000;
}
else if(num >= 900){
array.push("CM");
num-=900;
}
else if(num >= 500){
array.push("D");
num-=500;
}
else if(num >= 400){
array.push("CD");
num-=400;
}
else if(num >= 100){
array.push("C");
num-=100;
}
else if(num >= 90){
array.push("XC");
num-=90;
}
else if(num >= 50){
array.push("L");
num-=50;
}
else if(num >= 40){
array.push("XL");
num-=40;
}
else if(num >= 10){
array.push("X");
num-=10;
}
else if(num >= 9){
array.push("IX");
num-=9;

}
else if(num >= 5){
array.push("V");
num-=5;

}
else if(num >= 4){
array.push("IV");
num-=4;

}
else if(num >= 1){
array.push("I");
num-=1;

}

}
array = array.toString()
array=array.replaceAll(',','');
console.log(array)
return array;
}

convertToRoman(3333);
