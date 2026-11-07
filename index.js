const submitButton = document.querySelector("#submit");
const ratingPage = document.querySelector(".rating-page");
const message = document.querySelector(".message");
const RatingValue = document.querySelector(".rating-value");

submitButton.addEventListener("click", (e) => {
  e.preventDefault(e);

  const Radio = document.querySelector('[name="rating"]:checked');

  if (Radio == null) {
    alert("We'd love your feedback! Please choose a rating before submitting.");
  } else {
    const storage = Radio.value;
    message.classList.remove("hidden");
    ratingPage.classList.add("hidden");
    RatingValue.innerHTML = storage;
  }
});
