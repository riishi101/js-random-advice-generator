const button = document.getElementById("btn");
const adviceNumber = document.getElementById("number");
const randomText = document.getElementById("text");

//event handler
button.addEventListener("click", function (e) {
  e.preventDefault();

  // Fetch random advice from the API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const id = data.slip.id;

      // Update the text content with the fetched advice
      adviceNumber.textContent = `ADVICE  #${id}`;
      randomText.textContent = advice;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      randomText.textContent =
        "Failed to fetch advice. Please try again later.";
    });
});
