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
    const decimalOne = 1.987654321; 
    const fixedOne = decimalOne.toFixed(1); 
    console.log(fixedOne);
} 
fixedDecimal();