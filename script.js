function checkPassword(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the password input value
  const password = document.getElementById("password").value;

  // Check if the password is correct (in this example, the correct password is "password123")
  if (password === "822701") {
    // If the password is correct, redirect to a new page (in this example, we're redirecting to Google)
    window.location.replace("https://sites.google.com/stu.cfisd.net/rhsssvq24k0-iopwfrjw445wskvrr/home");
    return true;
  } else {
    // If the password is incorrect, display an error message
    document.getElementById("message").innerHTML = "Access Denied";
    return false;
  }
}
