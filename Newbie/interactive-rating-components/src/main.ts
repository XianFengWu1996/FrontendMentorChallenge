let rating: string = '';

const btns = document.querySelectorAll('.card--rating-item');
const submitBtn = document.querySelector('.card--submit');
const card = document.querySelector('.card');
const form = document.getElementById('card--content-form');

// attach event listener for all individual buttons
btns.forEach((btn) => {
  btn.addEventListener('click', buttonOnClickListener);
});

// SUBMIT

if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // prevent default
    if (rating && rating.length > 0) {
      // just in case, button disabled not working
      generateThankyouScreen();
    }
  });
}

function buttonOnClickListener(this: HTMLButtonElement) {
  // step 1
  // remove the card--btn-selected class from all buttons
  btns.forEach((btn) => {
    btn.classList.remove('card--btn-selected');
  });

  if (!submitBtn) return;
  // step 2
  // add the card--btn-selected class to the button thats clicked
  if (this.value === rating) {
    this.classList.remove('card--btn-selected');
    rating = '';
    (submitBtn as HTMLButtonElement).disabled = true;
  } else {
    this.classList.add('card--btn-selected');
    rating = this.value;
    (submitBtn as HTMLButtonElement).disabled = false;
  }
}

function generateThankyouScreen() {
  if (!form || !card) return;
  // generate a form completion screen
  form.style.display = 'none';
  const container = document.createElement('div');
  container.classList.add('card--content-thankyou');

  const icon = document.createElement('img');
  icon.src = '/images/illustration-thank-you.svg';
  icon.alt = 'thank you icon';

  const ratingDisplay = document.createElement('div');
  ratingDisplay.classList.add('rating-display');
  ratingDisplay.innerHTML = `You selected ${rating} out of 5`;

  const title = document.createElement('h3');
  title.classList.add('card--title');
  title.innerHTML = 'Thank you!';

  const text = document.createElement('p');
  text.classList.add('card--text', 'text--center');
  text.innerHTML =
    'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

  container.appendChild(icon);
  container.appendChild(ratingDisplay);
  container.appendChild(title);
  container.appendChild(text);

  card.appendChild(container);
}
