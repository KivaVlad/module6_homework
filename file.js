// Два способа объявления функции

   // Function Declaration
function funcName1(){
    console.log(1)
}
funcName1();

   // Function Expression
var funcName2 = function(){
    console.log(2)
}
funcName2();


// В Function Declaration можно вызывать функцию до ее объявления, а в F Expression нельзя

funcName1(); //считается верным
funcName2(); // ошибка

function funcName1(){
    console.log(1)
}

var funcName2 = function(){
    console.log(2)
}
