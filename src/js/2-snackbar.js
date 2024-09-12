import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateInputs = form.querySelectorAll('input[name="state"]');

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(delayInput.value);
  const state = Array.from(stateInputs).find(input => input.checked).value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

const styles = `
* {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
}

body {
    padding: 36px 156px;
    font-family: "Montserrat", sans-serif;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 360px;
    }

.form input[name="delay"] {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    padding: 8px 16px
    }
   
.form input[name="delay"]:hover {
    border: 1px solid #4e75ff;
    border-radius: 4px;
    width: 360px;
    height: 40px;
    }
    
.form input[name="state"] {

}

legend {
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    margin-left: -20px;
    font-size: 16px;
}

fieldset {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid #808080;
    border-radius: 4px;
    stroke: #808080;
    padding: 24px 30px 8px 30px;
}

button {
border-radius: 8px;
padding: 8px 16px;
width: 360px;
height: 40px;
background: #4e75ff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

button:hover {
background: #6c8cff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = styles;

document.head.appendChild(styleSheet);
