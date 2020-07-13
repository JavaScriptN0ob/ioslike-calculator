// class Calculator {
//   constructor(currentInput) {
//     this.currentInput = currentInput;
//     this.allClear();
//   }

//   allClear() {
//     this.currentInput = '0';
//     this.operator = undefined;
//   }

//   negative() {
//     this.currentInput = this.currentInput * -1;
//   }

//   percentage() {
//     this.currentInput = this.currentInput / 100;
//   }

//   clearFirstZero() {
//     if(this.)
//   }
// }

let numbers = document.querySelectorAll('.number');
let display = document.querySelector('.screen');
let dot = document.querySelector('.dot');
let status = document.querySelectorAll('.buttons__status');
let operator = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
var firstNumber = 0;
var secondNumber = 0;
var method = undefined;


numbers.forEach(
  (number) => {
    number.addEventListener('click', () => {
      number.classList.add('buttons__number--clicked');
      setTimeout((()=> {
        number.classList.remove('buttons__number--clicked')
      }), 150);
      if(document.querySelector('.buttons__operator--clicked')) {
        firstNumber = display.value;
        console.log(firstNumber);
        display.value = 0;
        document.querySelector('.buttons__operator--clicked').classList.remove('buttons__operator--clicked');
      }
      if(display.value.indexOf(0) === 0){
        if(display.value.indexOf('.') !== 1) {
          display.value = display.value.replace(0, '');
        }
      }
      display.value += `${number.innerText}`;
    });
  }
);

dot.addEventListener('click', () => {
  if(display.value.indexOf('.') === -1) {
    display.value += dot.innerText;
  }
})


status.forEach( 
  (status) => {
    status.addEventListener('click', () => {
      status.classList.add('buttons__status--clicked');
      setTimeout((()=> {
        status.classList.remove('buttons__status--clicked')
      }), 150);
    switch (status.innerText) {
      case 'AC':
        if(display.value === 0) return;
        display.value = 0;
        break;
      case '+/-':
        display.value = display.value * -1;
        break;
      case '%':
        display.value = display.value / 100;
        break;
    }
  });
});

operator.forEach(
  (operator) => {
    operator.addEventListener('click', () => {
      // operator.classList.add('buttons__operator--clicked');
      switch (operator.innerText) {
        case '+':
          operator.classList.add('buttons__operator--clicked');
          document.getElementById('-').classList.remove('buttons__operator--clicked');
          document.getElementById('x').classList.remove('buttons__operator--clicked');
          document.getElementById('÷').classList.remove('buttons__operator--clicked');
          console.log('operator is +');
          method = `${operator.innerText}`;
          break;
        case '-':
          operator.classList.add('buttons__operator--clicked');
          document.getElementById('+').classList.remove('buttons__operator--clicked');
          document.getElementById('x').classList.remove('buttons__operator--clicked');
          document.getElementById('÷').classList.remove('buttons__operator--clicked');
          console.log('operator is -');
          method = `${operator.innerText}`;
          break;
        case 'x':
          operator.classList.add('buttons__operator--clicked');
          document.getElementById('+').classList.remove('buttons__operator--clicked');
          document.getElementById('-').classList.remove('buttons__operator--clicked');
          document.getElementById('÷').classList.remove('buttons__operator--clicked');
          console.log('operator is *');
          method = `${operator.innerText}`;
          break;
        case '÷':
          operator.classList.add('buttons__operator--clicked');
          document.getElementById('+').classList.remove('buttons__operator--clicked');
          document.getElementById('-').classList.remove('buttons__operator--clicked');
          document.getElementById('x').classList.remove('buttons__operator--clicked');
          console.log('operator is /');
          method = `${operator.innerText}`;
          break;
      }
    })
  }
)

equal.addEventListener('click', () => {
  // if(document.querySelector('.buttons__operator--clicked') === null) return;
  console.log(firstNumber);
  secondNumber = display.value;
  display.value = '';
  console.log(secondNumber);
  console.log(method);
  // setTimeout(() => {
  //   method = undefined
  // }, 2000);
  // if(method === undefined) {
  //   alert('you need to enter a operator eg.+');
  //   display.value = 0;
  // }
  switch(method) {
    case '+':
      display.value = parseFloat(firstNumber)+parseFloat(secondNumber);
      break;
    case '-':
      display.value = parseFloat(firstNumber)-parseFloat(secondNumber);
      break;
    case 'x':
      display.value = parseFloat(firstNumber)*parseFloat(secondNumber);
      break;
    case '÷':
      display.value = parseFloat(firstNumber)/parseFloat(secondNumber);
      break;
  }
})

