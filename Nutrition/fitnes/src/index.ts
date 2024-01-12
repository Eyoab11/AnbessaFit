// script.ts

// Function to calculate Total Daily Energy Expenditure (TDEE)
function calculateCalories(): void {
  // Get input values
  const age: number = parseInt((<HTMLInputElement>document.getElementById('age')).value);
  const gender: string = (<HTMLSelectElement>document.getElementById('gender')).value;
  const weight: number = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
  const height: number = parseFloat((<HTMLInputElement>document.getElementById('height')).value);
  const activity: string = (<HTMLSelectElement>document.getElementById('activity')).value;

  // Validate input
  if (isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert('Please enter valid numeric values.');
    return;
  }

  // Calculate TDEE based on Harris-Benedict equation
  let bmr: number; // Basal Metabolic Rate
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === 'female') {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    alert('Please select a valid gender.');
    return;
  }

  // Adjust for activity level
  let tdee: number; // Total Daily Energy Expenditure
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

  // Display the result
  const resultElement: HTMLElement | null = document.getElementById('calories-result');
  if (resultElement) {
    resultElement.innerHTML = `Your Total Daily Energy Expenditure (TDEE) is approximately ${tdee.toFixed(2)} calories.`;
  }
}
document.getElementById('toggleBtn')?.addEventListener('click', function () {
  const navLinks = document.getElementById('navLinks');
  navLinks?.classList.toggle('hidden');
});

