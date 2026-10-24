document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const sections = document.querySelectorAll("header[id], section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});