// ================================
// Smooth active navbar highlight
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
document.querySelector(".resume-btn").addEventListener("click", function (e) {
  e.preventDefault(); // stop normal open
  const link = document.createElement("a");
  link.href = "./ASSETS/kavipriyanka.pdf";
  link.download = "Kavi_Priyanka_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
