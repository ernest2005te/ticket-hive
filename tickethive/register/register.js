const registerForm = document.getElementById("registerForm");
const verifyForm = document.getElementById("verifyForm");

let mockVerificationCode = "";

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value;

  // Generate mock 6-digit code
  mockVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("📲 Verification code sent to phone:", phone);
  alert(`(Demo) Verification code sent to ${phone}: ${mockVerificationCode}`);

  // Toggle to verify form
  registerForm.style.display = "none";
  verifyForm.style.display = "flex";
});

function verifyCode() {
  const inputCode = document.getElementById("code").value;

  if (inputCode === mockVerificationCode) {
    alert("✅ Account verified and registered successfully!");
    window.location.href = "login.html"; // redirect to login
  } else {
    alert("❌ Invalid verification code. Please try again.");
  }
}
