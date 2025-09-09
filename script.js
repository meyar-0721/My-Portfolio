function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


 
    let elm3 = document.getElementById("project-three");
    elm3.addEventListener("click", () => {
    const link = document.createElement("a");
    link.setAttribute("href", "https://meyar-0721.github.io/Recipe-page-Project/");
    link.setAttribute("target", "_blank"); // open in new tab
    link.click(); // simulate click
  });
 
    let elm1 = document.getElementById("project-one");
    elm1.addEventListener("click", () => {
    const link = document.createElement("a");
    link.setAttribute("href", "https://meyar-0721.github.io/project01/");
    link.setAttribute("target", "_blank"); // open in new tab
    link.click(); // simulate click
  });
    let elm2 = document.getElementById("project-two");
    elm2.addEventListener("click", () => {
    const link = document.createElement("a");
    link.setAttribute("href", "https://meyar-0721.github.io/Recipe-page-Project/");
    link.setAttribute("target", "_blank"); // open in new tab
    link.click(); // simulate click
  });






