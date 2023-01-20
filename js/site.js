
// controller function
function getValues() {
    let fizz = document.getElementById('fizz').value;
    let buzz = document.getElementById('buzz').value;
    let endValue = document.getElementById('endValue').value;


    // parse inputs as numbers
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);
    endValue = parseInt(endValue);

    fizzbuzz = fizz * buzz;

    // verify inputs are numbers
    if (Number.isInteger(fizz) && Number.isInteger(buzz) && Number.isInteger(endValue) && endValue < 5001) {

        // if so, generate numbers
        let fizzBuzzArray = generateFizzBuzz(fizz, buzz, endValue);
    
        // display on page
        displayFizzBuzz(fizzBuzzArray);

    } else {
        
        // else, notify user

        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Ending value must be 5000 or less!'
            }
        );
    }
}

// logic function
function generateFizzBuzz(fizz, buzz, end) {

    let numbers = [];

    for (let i = 1; i <= end; i++) {
        
        if (i % fizz == 0 && i % buzz == 0) {
            sub = 'FizzBuzz';
            numbers.push(sub)
        } else if (i % fizz == 0) {
            sub = 'Fizz';
            numbers.push(sub)
        } else if (i % buzz == 0) {
            sub = 'Buzz';
            numbers.push(sub)
        } else {
            numbers.push(i);
        }
        
    }
    return numbers;
}

// display function
function displayFizzBuzz(fizzBuzzArray) {
    let appBody = document.getElementById('results');

    let appHTML = "";

    for (let i = 0; i < fizzBuzzArray.length; i++) {
        let value = fizzBuzzArray[i];

        className = '';

        if (fizzBuzzArray[i] == 'FizzBuzz') {
            className = 'fizzbuzz'
        } else if (fizzBuzzArray[i] == 'Fizz') {
            className = 'fizz'
        } else if (fizzBuzzArray[i] == 'Buzz') {
            className = 'buzz'
        }

        
        let appRow = `<div class="col py-2 ${className}">${value}</div>`;


        appHTML += appRow
    }

    appBody.innerHTML = appHTML;
}
