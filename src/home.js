import homeimg from "./assets/home-img.png";

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");
  homeText.innerHTML = "Premium and Authentic Burgers";

  const homeImg = document.createElement("img");
  homeImg.classList.add("home-img");
  homeImg.src = homeimg;

  homeDiv.appendChild(homeText);
  homeDiv.appendChild(homeImg);

  return homeDiv;
}

function startHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createHome());
}

export default startHome;
