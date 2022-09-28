function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");

  // first contact
  const contactItem1 = document.createElement("div");
  contactItem1.classList.add("contact-item");

  const addressHeader = document.createElement("p");
  addressHeader.classList.add("contact-header");
  addressHeader.textContent = "Postal Address";
  const addressText = document.createElement("p");
  addressText.textContent = "Brooklyn 99";
  addressText.classList.add("contact-text");

  // second contact
  const contactItem2 = document.createElement("div");
  contactItem2.classList.add("contact-item");

  const phoneHeader = document.createElement("p");
  phoneHeader.classList.add("contact-header");
  phoneHeader.textContent = "Phone";
  const phoneText = document.createElement("p");
  phoneText.textContent = "+123-456-789";
  phoneText.classList.add("contact-text");

  // third contact
  const contactItem3 = document.createElement("div");
  contactItem3.classList.add("contact-item");

  const emailHeader = document.createElement("p");
  emailHeader.classList.add("contact-header");
  emailHeader.textContent = "Email";
  const emailText = document.createElement("p");
  emailText.textContent = "jaysburgers@gmail.com";
  emailText.classList.add("contact-text");

  contactItem1.appendChild(addressHeader);
  contactItem1.appendChild(addressText);

  contactItem2.appendChild(phoneHeader);
  contactItem2.appendChild(phoneText);

  contactItem3.appendChild(emailHeader);
  contactItem3.appendChild(emailText);

  contactDiv.appendChild(contactItem1);
  contactDiv.appendChild(contactItem2);
  contactDiv.appendChild(contactItem3);

  return contactDiv;
}

export function startContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createContact());
}
