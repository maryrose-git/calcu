
            var currentInput = '';
            var previousInput = '';
            var operation = null;
            var display = document.getElementById('display');
    
            function inputDigit(digit) {
                if (currentInput === '0') {
                    currentInput = digit.toString();
                } else {
                    currentInput += digit;
                }
                updateDisplay();
            }
    
            function inputDecimal() {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
                updateDisplay();
            }
    
            function clearDisplay() {
                currentInput = '0';
                previousInput = '';
                operation = null;
                updateDisplay();
            }
    
            function setOperation(op) {
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        performCalculation();
                    }
                    operation = op;
                    previousInput = currentInput;
                    currentInput = '';
                }
            }
    
            function performCalculation() {
                var result;
                var prev = parseFloat(previousInput);
                var current = parseFloat(currentInput);
    
                if (isNaN(prev) || isNaN(current)) return;
    
                switch (operation) {
                    case '+':
                        result = prev + current;
                        break;
                    case '-':
                        result = prev - current;
                        break;
                    case '*':
                        result = prev * current;
                        break;
                    case '/':
                        if (current === 0) {
                            alert('Division by zero is undefined.');
                            return;
                        }
                        result = prev / current;
                        break;
                    default:
                        return;
                }
    
                currentInput = result.toString();
                operation = null;
                previousInput = '';
                updateDisplay();
            }
    
            function updateDisplay() {
                display.value = currentInput;
            }
    
            clearDisplay();