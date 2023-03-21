function checkPassword(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the password input value
  const password = document.getElementById("password").value;

  // Check if the password is correct (in this example, the correct password is "password123")
  if (password === "TL9162010") {
    // If the password is correct, redirect to a new page (in this example, we're redirecting to Google)
    window.location.replace("https://sites.google.com/stu.cfisd.net/vvmy1yzzfyjkf-lraluoatbzkaoepn/home");
    return true;
  } else {
    // If the password is incorrect, display an error message
    document.getElementById("message").innerHTML = "Access Denied";
    return false;
  }
}
