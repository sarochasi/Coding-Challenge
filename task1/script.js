// Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text based on the current mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  });

  // Set initial button text based on the mode
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  });
  
// Smooth scrolling and independent section display
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
  
      const targetId = e.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      document.querySelectorAll("main section").forEach((section) => {
        section.style.display = "none";
      });
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("active");
      });
 
      targetSection.style.display = "block";
  
      e.target.classList.add("active");
  
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  
// Highlight the active section based on scroll position (optional for independent sections)
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");
  
window.addEventListener("scroll", () => {
    let currentSectionId = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSectionId) {
        link.classList.add("active");
      }
    });
  });
  
// Initial setup: Show only the first section on page load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a");
  
    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "block" : "none"; 
    });
  
    if (navLinks.length > 0) {
      navLinks[0].classList.add("active"); 
    }
  });
  