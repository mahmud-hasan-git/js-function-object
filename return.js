// function add (number1, number2){
//     console.log(number1,number2);
//     var sum = number1 + number2;
//     console.log(sum);
// }
// add (45,15);

function bringSingara (money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var givenTaka = 120;
var singraStatus = bringSingara(givenTaka);
console.log('You Have got', singraStatus, 'Singara');