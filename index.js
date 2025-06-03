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


