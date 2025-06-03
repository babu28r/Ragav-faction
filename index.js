var sidenav = document.querySelector(".side-navbar")


function showNavbar(){
  sidenav.style.left="0"
}
function closeNavbar(){
  sidenav.style.left="-60%"
}


  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }


  const productName = getQueryParam('name');
  const productPrice = getQueryParam('price');

 
  if (productName && productPrice) {
    document.getElementById('product-name').textContent = `Product: ${productName}`;
    document.getElementById('product-price').textContent = `Price: ₹${productPrice}`;
  }


  function subscribe() {
    const email = document.getElementById("newsletter-email").value;
    if (email) {
      alert("Subscribed with: " + email);
     
    } else {
      alert("Please enter a valid email address.");
    }
  }

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const paymentContainer = document.querySelector(".payment-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      return;
    }

    paymentContainer.innerHTML = `
      <h2>Payment Successful</h2>
      <p>Thank you, <strong>${name}</strong>! Your payment has been processed successfully.</p>
      <p>We’ve sent a confirmation to <strong>${email}</strong>.</p>
      <h3 style="margin-top: 30px;">Enter Delivery Address</h3>
      <form id="address-form">
        <div class="form-group">
          <label for="address-name">Full Name</label>
          <input type="text" id="address-name" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" required pattern="[0-9]{10}" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <textarea id="address" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="pincode">Pincode</label>
          <input type="text" id="pincode" required pattern="[0-9]{6}" />
        </div>
        <button type="submit" class="pay-btn">Submit Address</button>
      </form>
    `;

    setTimeout(() => {
      const addressForm = document.getElementById("address-form");
      addressForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const deliveryName = document.getElementById("address-name").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;

        paymentContainer.innerHTML = `
          <h2>Thank You!</h2>
          <p>Your delivery details have been received.</p>
          <p><strong>Name:</strong> ${deliveryName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Pincode:</strong> ${pincode}</p>
          <a href="index.html"><button class="pay-btn">Return Home</button></a>
        `;
      });
    }, 0); 
  });
});
