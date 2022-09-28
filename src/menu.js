import classicBurger from "./assets/classic-burger.png";
import xxlBurger from "./assets/xxl-burger.png";
import jaysSignature from "./assets/jays-signature-burger.png";
import friedChickenBurger from "./assets/fried-chicken-burger.png";

function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  // first burger
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");

  const classicBurgerImg = document.createElement("img");
  classicBurgerImg.classList.add("menu-img");
  classicBurgerImg.src = classicBurger;

  const classicBurgerText = document.createElement("p");
  classicBurgerText.classList.add("menu-text");
  classicBurgerText.textContent = "Classic Burger";

  menuItem1.appendChild(classicBurgerImg);
  menuItem1.appendChild(classicBurgerText);

  // second burger
  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");

  const xxlBurgerImg = document.createElement("img");
  xxlBurgerImg.classList.add("menu-img");
  xxlBurgerImg.src = xxlBurger;

  const xxlBurgerText = document.createElement("p");
  xxlBurgerText.classList.add("menu-text");
  xxlBurgerText.textContent = "XXL Burger";

  menuItem2.appendChild(xxlBurgerImg);
  menuItem2.appendChild(xxlBurgerText);

  // third burger
  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");

  const jaysSignatureImg = document.createElement("img");
  jaysSignatureImg.classList.add("menu-img");
  jaysSignatureImg.src = jaysSignature;

  const jaysSignatureText = document.createElement("p");
  jaysSignatureText.classList.add("menu-text");
  jaysSignatureText.textContent = "Jay's Signature Burger";

  menuItem3.appendChild(jaysSignatureImg);
  menuItem3.appendChild(jaysSignatureText);

  // fourth burger
  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");

  const friedChickenBurgerImg = document.createElement("img");
  friedChickenBurgerImg.classList.add("menu-img");
  friedChickenBurgerImg.src = friedChickenBurger;

  const friedChickenBurgerText = document.createElement("p");
  friedChickenBurgerText.classList.add("menu-text");
  friedChickenBurgerText.textContent = "Fried Chicken Burger";

  menuItem4.appendChild(friedChickenBurgerImg);
  menuItem4.appendChild(friedChickenBurgerText);

  menuDiv.appendChild(menuItem1);
  menuDiv.appendChild(menuItem2);
  menuDiv.appendChild(menuItem3);
  menuDiv.appendChild(menuItem4);

  return menuDiv;
}

function startMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createMenu());
}

export default startMenu;
