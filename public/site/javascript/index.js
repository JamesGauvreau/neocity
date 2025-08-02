document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;
    const isOpen = panel.style.maxHeight;

    // Close all panels first if you want single-open behavior
    document.querySelectorAll(".panel").forEach(p => {
      if (p !== panel) {
        p.style.maxHeight = null;
        p.previousElementSibling.classList.remove("active");
      }
    });

    panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
  });
});
