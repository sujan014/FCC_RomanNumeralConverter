const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputValue = document.getElementById('output');

let ones = 'I';
let fives = 'V';
let tens = 'X';

// Make this a Recursive function soon.

const IntegerToRoman = (input) => {
    // first using while !!
    let roman = "";
    let unit = 1;
    ones = 'I';
    fives = 'V';
    tens = 'X';

    while(input > 0){           
        const remainder = Math.floor(input % 10);
        input = Math.floor(input / 10);
        console.log("remainder: ", remainder);
        console.log("input: ", input);
        switch(remainder){
            case 1:
                roman = ones + roman;
                break;
            case 2:
                roman = ones.repeat(2) + roman;
                break;
            case 3:
                roman = ones.repeat(3) + roman;
                break;
            case 4:
                roman = ones + fives + roman;
                break;
            case 5:
                roman = fives + roman;
                break;
            case 6:
                roman = fives + ones + roman;
                break;
            case 7:
                roman = fives + ones.repeat(2) + roman;
                break;
            case 8:
                roman = fives + ones.repeat(3) + roman;
                break;
            case 9:
                roman = ones + tens + roman;
                break;
            case 0:                
                break;
            default:
                roman = "invalid";
        }
        unit = unit * 10;
        if (unit == 10){
            ones = 'X';
            fives = 'L';
            tens = 'C';
        }
        else if (unit == 100){
            ones = 'C';
            fives = 'D';
            tens = 'M';
        }
        else if (unit == 1000){
            ones = 'M';
        }
    }
    return roman;
}

const getIcheckUserInputnput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value){
        outputValue.innerText = 'Please enter a valid number';
    }
    
    else if (inputInt > 3999 ){
        outputValue.innerText = 'Please enter a number less than or equal to 3999';
    }
    else if (inputInt < 1 ){
        outputValue.innerText = 'Please enter a number greater than or equal to 1';
    }
    else{
        // Convert here        
        let toRoman = IntegerToRoman(inputInt);
        outputValue.innerText = toRoman;
    }
    numberInput.value = "";
}

convertButton.addEventListener("click", getIcheckUserInputnput);