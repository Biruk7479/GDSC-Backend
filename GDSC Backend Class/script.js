let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        document.getElementById('bmi-result').innerText = 'Please enter weight and height';
        return;
    }

    height = height / 100; // convert height to meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // round to 2 decimal places

    let resultMessage = `Your BMI is ${bmi}. `;
    if (bmi < 18.5) {
        resultMessage += 'You are underweight.';
    } else if (bmi < 24.9) {
        resultMessage += 'You have a normal weight.';
    } else if (bmi < 29.9) {
        resultMessage += 'You are overweight.';
    } else {
        resultMessage += 'You are obese.';
    }

    let minHeightWeight = 18.5 * (height * height);
    let maxHeightWeight = 24.9 * (height * height);

    resultMessage += ` Your optimal weight range is ${minHeightWeight.toFixed(2)} kg - ${maxHeightWeight.toFixed(2)} kg.`;

    document.getElementById('bmi-result').innerText = resultMessage;
}
