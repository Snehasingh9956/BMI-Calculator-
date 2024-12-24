document.getElementById('calculateBtn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters

  const resultDiv = document.getElementById('result');
  const bmiValueSpan = document.getElementById('bmiValue');
  const bmiCategoryP = document.getElementById('bmiCategory');

  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    bmiValueSpan.textContent = bmi;

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    bmiCategoryP.textContent = category;
    resultDiv.classList.remove('hidden');
  } else {
    alert('Please enter valid weight and height values.');
  }
});
