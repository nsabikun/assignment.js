// https://github.com/nsabikun/assignment.js.git

// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var nmeter = kilometerToMeter(100);
var lmeter = kilometerToMeter(197);
// budgetCalculator
function budgetCalculator(add){watch , phone , laptop 
var result = watch + phone + laptop;
return result;}
var total = add(50, 100, 500);
// hotelCost
 var night = 36;
 var cost = 0;
 if(night<=10){
     cost = night * 100;
 } else if (night<= 20){
     var firstpart = 10* 100;
   var remaining = night -10;
    var secondpart = remaining * 80;
     night = firstpart + secondpart; }
 else{
     var firstpart = 10*100;
    var secondpart = 10* 80;
    var remaining = night-20;     var thirdpart = remaining *50;
     night= firstpart + secondpart + thirdpart;
 }
// megaFriend
var friend = [pani, sohel, santo, afsar, juma, saroweer ];
var max = frienond[0];
for(var i = 0; i<friend.length; i++){
    var element = friend[i];
    if(element > friend){
        max = element;
    }
}
console.log( "hight value:", max)