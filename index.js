const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

const currentInput = $('.currentInput');
const result = $('.result');
const buttons = $$('.btn');

//Styles variables
const root = $(':root')

const screenValue = []

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleClick(button);
    })
})

const handleClick = (button) => {
    const { value } = button.dataset
    if (value === 'clear') {
        screenValue.length = 0;
        currentInput.textContent = '\xa0';
        result.textContent = '0';
        resetDisplay()
    } else if (value === 'delete') {
        screenValue.pop();
        evalResult();
        resetDisplay();
        screenValue.length === 0 ? result.textContent = '0' : result.textContent = eval(screenValue.join(''));
    } else if (value === 'equals') {
        currentInput.className = 'result'
        result.className = 'currentInput'
        result.style.color = '#fff'
    } else {
        screenValue.push(value);
        evalResult()
        resetDisplay();
    }
    if (typeof eval(screenValue.join('')) === 'undefined') {
        result.textContent = '0'
    }
}

const evalResult = () => {
    currentInput.textContent = screenValue.join('');
    result.textContent = eval(screenValue.join(''));
}

const resetDisplay = () => {
    currentInput.textContent === '' ? currentInput.textContent = '\xa0' : currentInput.textContent = currentInput.textContent;
    currentInput.className = 'currentInput';
    result.className = 'result';
    result.style.color = '#969696de'
}