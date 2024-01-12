"use strict";

var _a;

function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numeric values.');
        return;
    }
    let bmr; 
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
    else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    else {
        alert('Please select a valid gender.');
        return;
    }
    let tdee; 
    switch (activity) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'lightly-active':
            tdee = bmr * 1.375;
            break;
        case 'moderately-active':
            tdee = bmr * 1.55;
            break;
        case 'very-active':
            tdee = bmr * 1.725;
            break;
        default:
            alert('Please select a valid activity level.');
            return;
    }

    const resultElement = document.getElementById('calories-result');
    if (resultElement) {
        resultElement.innerHTML = `Your Total Daily Energy Expenditure (TDEE) is approximately ${tdee.toFixed(2)} calories.`;
    }
}
let email = document.querySelector("#email-input");
let password = document.querySelector("#password-input");
async function signup() {

    email = email.value;
    password = password.value;

    try {
        const response = await fetch('http://localhost:4444/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        alert("Successful");
    } catch (error) {
        console.error('Error during signup:', error);
    }

}