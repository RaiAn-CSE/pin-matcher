function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const priviousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === "<") {
            const digits = priviousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = priviousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    // console.log(number);
})


document.getElementById('veryfy-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;

    // Show Error 
    const pinSuccessSMS = document.getElementById('pin-success');
    const pinFailSMS = document.getElementById('pin-fail');

    if (typeNumber === currentPin) {
        pinSuccessSMS.style.display = 'block';
        pinFailSMS.style.display = 'none';
    }
    else {
        pinFailSMS.style.display = 'block';
        pinSuccessSMS.style.display = 'none';
    }

})