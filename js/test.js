<<<<<<< HEAD
function recursiveFizzBuzz(fizz, buzz, end, fizzBuzzValues = []) {
    let i = fizzBuzzValues.length + 1;

    let value = ((i % fizz == 0 ? "Fizz" : "") + (i % buzz == 0 ? "Buzz" : "") || value);

    fizzBuzzValues.push(value);

    if (fizzBuzzValues.length < end) {
        return recursiveFizzBuzz(fizz, buzz, end, fizzBuzzValues);
    } else {
        return fizzBuzzValues;
    }
}

if (isNaN(fizz) || isNaN(buzz) || isNaN(end)) {

    Swal.fire(
        {
            icon: 'error',
            title: 'Oops!',
            text: 'All values have to be integers!'
        }
    );
    
} else if (fizz == 0 || buzz == 0) {
    
    Swal.fire(
        {
            icon: 'error',
            title: 'Oops!',
            text: 'All values have to be integers!'
        }
    );

=======

// controller function
function getValues() {
    let inputString = document.getElementById('reverse').value;


}


function checkForPalindrome(userString) {

    let count = [];
    let endCount = []
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }

    let n = userString.length;

    for (let i = 0, j = n - 1; i < j; i++, j--) {

        // First half
        count[userString[i]]++;

        // Second half
        endCount[userString[j]]--;
    }

    if (count == endCount) {
        return true
    }
>>>>>>> 3423ab24fb0002dc2a6a2d9c3ff6ead4d72a21c8
}