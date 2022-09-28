import "./styles/style.css";
import startHome from "./home";
import startMenu from "./menu";
import startContact from "./contact";

function createTitle() {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "Jay's Burgers";

  return title;
}

function createNav() {
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  navList.classList.add("nav-list");
  nav.appendChild(navList);

  const homeNav = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.classList.add("nav-item");
  homeLink.innerHTML = "home";
  homeLink.classList.add("active");
  navList.appendChild(homeNav);
  homeNav.appendChild(homeLink);

  const menuNav = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.classList.add("nav-item");
  menuLink.innerHTML = "menu";
  navList.appendChild(menuNav);
  menuNav.appendChild(menuLink);

  const contactNav = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.classList.add("nav-item");
  contactLink.innerHTML = "contact";
  navList.appendChild(contactNav);
  contactNav.appendChild(contactLink);

  homeLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    startHome();
  });

  menuLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    startMenu();
  });

  contactLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    startContact();
  });

  return nav;
}

function removeActive() {
  const navItems = [...document.querySelectorAll(".nav-item")];

  navItems.forEach((link) => {
    link.classList.remove("active");
  });
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id", "content");

  return content;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "created by jaysan0";

  return footer;
}

function startSite() {
  const container = document.getElementById("container");
  const body = document.querySelector("body");

  container.appendChild(createTitle());
  container.appendChild(createNav());
  container.appendChild(createContent());
  body.appendChild(createFooter());

  startHome();
}

export default startSite;
