const verifyButton = document.getElementById("verifyButton");
const otpInputs = document.querySelectorAll(".otp-inputs input");
const verificationMessage = document.getElementById(
  "verificationMessage"
);

otpInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    input.value = input.value.replace(/\D/g, "");

    if (input.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
});

verifyButton.addEventListener("click", function () {
  let code = "";

  otpInputs.forEach((input) => {
    code += input.value;
  });

  if (code === "123456") {
    verificationMessage.style.color = "#16a34a";
    verificationMessage.textContent =
      "Verification successful!";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  } else {
    verificationMessage.style.color = "#dc2626";
    verificationMessage.textContent =
      "Invalid verification code.";
  }
});