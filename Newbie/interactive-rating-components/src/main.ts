let rating: string = '';

const btns = document.querySelectorAll('.card--rating-item');

function onClickHandler(this: HTMLButtonElement) {
  // step 1
  // remove the card--btn-selected class from all buttons
  btns.forEach((btn) => {
    btn.classList.remove('card--btn-selected');
  });

  // step 2
  // add the card--btn-selected class to the button thats clicked
  if (this.value === rating) {
    this.classList.remove('card--btn-selected');
    rating = '';
  } else {
    this.classList.add('card--btn-selected');
    rating = this.value;
  }
}

// attach event listener for all individual buttons
btns.forEach((btn) => {
  btn.addEventListener('click', onClickHandler);
});
