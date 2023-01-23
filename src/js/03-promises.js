import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const createBtn = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });
}

createBtn.addEventListener('click', e => {
  e.preventDefault();
  let currentDelay = parseInt(delayInput.value);

  for (let i = 0; i < amountInput.value; i++) {
    createPromise(i + 1, currentDelay);
    parseInt(stepInput.value);
    currentDelay += parseInt(stepInput.value);

    parseInt(stepInput.value) * i;
  }
  parseInt(delayInput.value);
});
