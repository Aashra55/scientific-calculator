#! /usr/bin/env node
import inquirer from "inquirer";
const operation = await inquirer.prompt({
    message:"Choose any one operation",
    type:"list",
    name:"list",
    choices:['addition','subtraction','division',
        'multiplication','modulus','exponent',
        'square root'
    ]
});
if(operation.list==='modulus'){
    const modulus = await inquirer.prompt([
        {
        message:"Enter first number",
        type:"number",
        name:"firstNumber"
    },
    {
        message:"Enter second number",
        type:"number",
        name:"secondNumber"
    }
]);
let modulusAns = modulus.firstNumber % modulus.secondNumber
console.log(`Remainder is ${modulusAns}`)
}else if(operation.list==='exponent'){
    const exponent = await inquirer.prompt([
        {
            message:"Enter the number whose you would like to get exponent",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter the number of power",
            type:"number",
            name:"power"
        }
    ]);
let exponentAns = exponent.firstNumber**exponent.power;
console.log(`Exponent is ${exponentAns}`);    
}else if(operation.list === 'addition'){
    const addition = await inquirer.prompt([
        {
            message:"Enter first number",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter second number",
            type:"number",
            name:"secondNumber"
        }
    ]);
let additionAns = addition.firstNumber + addition.secondNumber;
console.log(`Answer is ${additionAns}`);    
}else if(operation.list === 'subtraction'){
    const subtraction = await inquirer.prompt([
        {
            message:"Enter first number",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter second number",
            type:"number",
            name:"secondNumber"
        }
    ]);
let subtractionAns = subtraction.firstNumber - subtraction.secondNumber;
console.log(`Answer is ${subtractionAns}`);   
}else if (operation.list === 'division'){
    const division = await inquirer.prompt([
        {
            message:"Enter first number",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter second number",
            type:"number",
            name:"secondNumber"
        }
    ]);
let divisionAns = division.firstNumber / division.secondNumber;
console.log(`Answer is ${divisionAns}`);
}else if(operation.list === 'multiplication'){
    const multiplication = await inquirer.prompt([
        {
            message:"Enter first Number",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter second number",
            type:"number",
            name:"secondNumber"
        }
    ]);
let multiplicationAns = multiplication.firstNumber*multiplication.secondNumber;
console.log(`Answer is ${multiplicationAns}`);
}else if(operation.list === 'square root'){
    const root = await inquirer.prompt({
        message:"Enter the number whose you would like to get square root",
        type:"number",
        name:"radicalNumber"
    });
function squareRoot (x=root.radicalNumber){
    return Math.sqrt(x);
};
let squareRootAns = squareRoot();
console.log(`Square root of ${root.radicalNumber} is ${squareRootAns}`);
}else{
    console.log('Please select valid operator')
};