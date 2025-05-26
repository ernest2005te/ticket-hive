document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simulate validation (for demo purposes)
    if (email && password) {
      alert("Login successful! 🎉");
      // redirect to dashboard or homepage
      // window.location.href = "/dashboard.html";
    } else {
      alert("Please enter valid credentials.");
    }
  });
  