// Product Filter Function
function filterProducts(category) {
  let products = document.getElementsByClassName("product-item");
  for (let i = 0; i < products.length; i++) {
    if (category === "all" || products[i].classList.contains(category)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}

// Back to Top Button Functionality
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    // Validate fields
    if (nameField.value.trim() === "") {
      nameField.classList.add("form-error");
      isValid = false;
    } else {
      nameField.classList.remove("form-error");
    }

    if (emailField.value.trim() === "" || !emailField.value.includes("@")) {
      emailField.classList.add("form-error");
      isValid = false;
    } else {
      emailField.classList.remove("form-error");
    }

    if (messageField.value.trim() === "") {
      messageField.classList.add("form-error");
      isValid = false;
    } else {
      messageField.classList.remove("form-error");
    }

    // Show success or error message
    if (isValid) {
      formMessage.textContent =
        "Thank you for your message! We’ll get back to you soon.";
      formMessage.classList.remove("error");
      formMessage.style.display = "block";
      formMessage.style.color = "#28a745";

      // Reset form fields after a delay
      setTimeout(() => {
        document.getElementById("contactForm").reset();
        formMessage.style.display = "none";
      }, 3000);
    } else {
      formMessage.textContent = "Please fill out all fields correctly.";
      formMessage.classList.add("error");
      formMessage.style.display = "block";
    }
  });
