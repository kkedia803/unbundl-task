document.querySelectorAll(".faq-item").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isActive = button.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

    if (!isActive) {
      button.classList.add("active");
      answer.style.display = "block";
    }
  });
});