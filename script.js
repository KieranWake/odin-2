//Challenge 1: Testing Assignment Operators! 
//Description: Declare some variables and test the difference between - 
//standard equality operator and various assignment operators. 

function testAssignment() {
    let sum = "30"; 
    sum = Number(sum) + 40; 

    console.log(Number(sum)); 

    let num = (4 * 7) + 4; 
    num += num * 4;
    console.log(num);


}
testAssignment();

//Challenge 2: Sorting Decimals! 
//Description: Declare a function that takes two variables assigned with long decimals - 
//Then use subtraction assignment to solve for the difference. 

function fixedDecimal() {
    let decimalOne = 1.987654321; 
    decimalOne = parseFloat(decimalOne.toFixed(1)); 
    console.log("Decimal One:", decimalOne);

    let decimalTwo = 2.987654321; 
    decimalTwo = parseFloat(decimalTwo.toFixed(1)); 
    console.log("Decimal Two:", decimalTwo); 

    return decimalOne * decimalTwo; 
} 
console.log(fixedDecimal());

//Challenge 3: All Assignment Operators! 
//Description: Just use all assignment operators with variables! 

function operatorTest() {
    let num = 3; 
    num += num * 4;
    console.log(num);

    let str = "12"; 
    str -= Number(str) * 4;
    console.log(str);

    let result = "40"; 
    result *= parseInt(result) + 15;
    console.log(result);

    let testing = "300";
    testing /= parseInt(testing) * 50;
    console.log(testing);

    let x = 3; 
    let y = 4;
    x += y; 
    console.log(x += y);
}
operatorTest();

//Challenge 4: Sizing a Canvas Box! 
//Requirements: Change the line that calculates x so the box is still 50px wide, but the 50 -
//is calculated using the numbers 43 and 7 and an arithmetic operator.

//Change the line that calculates y so the box is 75px high, but the 75 is calculated using the -
//numbers 25 and 3 and an arithmetic operator.

//Change the line that calculates x so the box is 250px wide, but the 250 is calculated using -
//two numbers and the remainder (modulo) operator.

//Change the line that calculates y so the box is 150px high, but the 150 is calculated using -
//three numbers and the subtraction and division operators.

//Change the line that calculates x so the box is 200px wide, but the 200 is calculated using -
//the number 4 and an assignment operator.

//Change the line that calculates y so the box is 200px high, but the 200 is calculated using -
//the numbers 50 and 3, the multiplication operator, and the addition assignment operator.

let x = 50; let y = 50;

// Edit the two lines below here ONLY
x *= 4; 
console.log(x);
y += 50 * 3;
console.log(y);  

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);