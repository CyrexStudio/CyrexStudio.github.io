window.addEventListener("DOMContentLoaded", function () {
  // Bouton retour en haut
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTop.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // Loader
  setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");
    setTimeout(function () {
      if (loader) loader.style.display = "none";
      document.querySelectorAll(".fade-in").forEach((el) => {
        el.classList.add("visible");
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      });
      document
        .querySelectorAll(".fade-in")
        .forEach((el) => observer.observe(el));
    }, 800);
  }, 1200);

  // FAQ
  setTimeout(function () {
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", function () {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((other) => {
          other.classList.remove("open");
        });
        if (!isOpen) item.classList.add("open");
      });
    });
  }, 100);
});
