// Arabic luanguage button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("goBtn");

  function goToPage() {
    window.location.href = "Arabic_index.html"; 
  }

  btn.addEventListener("click", goToPage);
});
// English luanguage button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("goBttn");

  function goToPage() {
    window.location.href = "index.html"; 
  }

  btn.addEventListener("click", goToPage);
});