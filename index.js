const digits = '9876543210';
const operators = ['+', '-', ''];

function generateExpressions(digits, operators, index = 0, expr = '') {
    if (index === digits.length - 1) {
        expr += digits[index];
            if (eval(expr) === 200) {
                console.log(`${expr}=200`);
            }
        return;
    }
    for (let op of operators) {
        generateExpressions(digits, operators, index + 1, expr + digits[index] + op);
    }
}

generateExpressions(digits, operators);