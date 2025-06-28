// Navbar toggle
function showNavbar() {
  document.querySelector(".side-navbar").style.left = "0";
}
function closeNavbar() {
  document.querySelector(".side-navbar").style.left = "-60%";
}

// Payment Method Selection
function handlePaymentChange() {
  const method = document.getElementById("payment").value;
  document.querySelectorAll('.payment-extra').forEach(el => el.style.display = 'none');
  if (method === "card") document.getElementById("card-details").style.display = "block";
  if (method === "upi") document.getElementById("upi-details").style.display = "block";
  if (method === "wallet") document.getElementById("wallet-details").style.display = "block";
  if (method === "cod") document.getElementById("cod-details").style.display = "block";
}

// Form Validation
document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Helper
  function setError(id, message) {
    const errorEl = document.getElementById(id + "-error");
    const input = document.getElementById(id);
    errorEl.textContent = message;
    errorEl.style.display = message ? "block" : "none";
    if (message) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  }

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (!/^[a-zA-Z ]+$/.test(name)) {
    setError("name", "Enter a valid name (letters only).");
  } else {
    setError("name", "");
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setError("email", "Enter a valid email address.");
  } else {
    setError("email", "");
  }

  // Payment Method
  const paymentMethod = document.getElementById("payment").value;

  // Card Number
  if (paymentMethod === "card") {
    const cardNumber = document.getElementById("card-number").value.trim();
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      setError("card-number", "Enter a valid 16-digit card number.");
    } else {
      setError("card-number", "");
    }
  }

  // UPI ID
  if (paymentMethod === "upi") {
    const upiId = document.getElementById("upi-id").value.trim();
    if (!/^[\w.-]+@[\w]+$/.test(upiId)) {
      setError("upi", "Enter a valid UPI ID.");
    } else {
      setError("upi", "");
    }
  }

  // Wallet Number
  if (paymentMethod === "wallet") {
    const walletNumber = document.getElementById("wallet-number").value.trim();
    if (!/^\d{10}$/.test(walletNumber)) {
      setError("wallet", "Enter a 10-digit mobile number.");
    } else {
      setError("wallet", "");
    }
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
    document.querySelectorAll(".error-message").forEach(e => e.style.display = "none");
    document.querySelectorAll("input").forEach(i => i.classList.remove("error"));
  }
});
