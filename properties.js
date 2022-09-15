var shoppinCart = {
    book:3,
    sunglass: 1,
    keybord:3,
    mouse:1,
    pen:10
} 
console.log (shoppinCart);
console.log (shoppinCart.book); // to get spacfice keys value

// to change spacfice key value
shoppinCart.keybord = 4; 
shoppinCart.mouse = 5;
shoppinCart['keybord'] = 27;
console.log ( Object.values (shoppinCart)); // to get all keys value

// to get spacfice key with value
var propertyName = 'mouse';
shoppinCart[propertyName] = 29;
var propertyValue =shoppinCart[propertyName];
console.log(propertyName, propertyValue);