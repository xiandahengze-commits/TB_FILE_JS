var omikujiarr = ["大吉","中吉","小吉"];


function kujimethod () {
    var number1 = Math.random();
    var number2 = number1 * 3;
    var number = Math.floor(number2);
    var result = omikujiarr[number];
    var object = document.getElementById('omikuji');
    object.innerText = result;
}
