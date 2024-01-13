const password = document.getElementById("text-input");

const length = 12;
const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

function buttonClicked() {
  let passwordOne = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    passwordOne += charset.charAt(randomIndex);
  }
  copyToClipboard();
  password.value = passwordOne;
}

function copyToClipboard() {
  password.select();
  document.execCommand("copy");
  navigator.clipboard
    .writeText(password.value)
    .then(() => {
      // alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Unable to copy to clipboard", err);
    });
}
