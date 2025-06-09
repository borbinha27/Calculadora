let currentDisplay = '0';
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentDisplay;
}

function appendToDisplay(value) {
    if (currentDisplay === '0' && !['.', '(', ')'].includes(value)) {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

function calculate() {
    try {
        if (!areParenthesesBalanced(currentDisplay)) {
            currentDisplay = 'Erro';
            updateDisplay();
            return;
        }

        currentDisplay = eval(currentDisplay).toString();
    } catch (error) {
        currentDisplay = 'Erro';
    }
    updateDisplay();
}

function areParenthesesBalanced(expr) {
    const stack = [];

    for (let char of expr) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;   
            }
            stack.pop();
        }
    }

    return stack.length === 0; 
}