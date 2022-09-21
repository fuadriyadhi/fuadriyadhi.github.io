const scriptURL = "https://script.google.com/macros/s/AKfycbwIPgfGoIULzxXIYE2GbOQQ4SAxNHkZkzcTYp3UubYz8L-Q1lwebAHrDDlrlV-3CGpB/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const warn = document.querySelector(".warn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let message = e.target.message.value;
  if (!name || !email || !message) {
    warn.classList.toggle("d-none");
    return;
  }
  //ketika tombol submit diklik
  //tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //kebalikan
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //show allert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
