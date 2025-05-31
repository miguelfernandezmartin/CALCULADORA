const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === 'clear') {
      currentInput = '';
      updateDisplay('0');
    } else if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || '0');
    } else if (action === 'equals') {
      try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
        resetNext = true;
      } catch {
        updateDisplay('Error');
        currentInput = '';
      }
    } else if (value) {
      if (resetNext) {
        currentInput = '';
        resetNext = false;
      }
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}