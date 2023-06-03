// Variables from html
const formSubmit = document.getElementById("form")
const formInput = document.getElementById("input")
const errorMsg = document.querySelector(".error-message")

// Submit Form Function
function submitForm(e) {
    const inputValue = formInput.value
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputValue.match(regex)) {
        createSuccessModal()
        formInput.classList.remove("error")
        errorMsg.style.display = "none"
    } else {
        formInput.classList.add("error")
        errorMsg.style.display = "block"
    }
    e.preventDefault()
}
// Function to replace innerHTML with sucess modal
function createSuccessModal() {
    // create section parent container
    const section = document.createElement("section");
    section.className = "success";

    // create img and insert
    const img = document.createElement("img");
    img.src = "./assets/images/icon-success.svg";
    img.alt = "success icon";

    // create article h1, paragraph, and button
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");

    // add content to article h1, paragraph, and button
    h2.textContent = "Thanks for subscribing!";
    p.innerHTML = 'A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.';
    button.textContent = "Dismiss message";

    // Add event listener to the button
    button.addEventListener("click", function () {
        // Code to dismiss the message
        location.reload(); // Reload the DOM
    });

    // Append h2, p, and btn to article
    article.append(h2, p, button);

    // Append img, article to section
    section.append(img, article);

    // Append section to main
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(section);
}

// Event Listeners
formSubmit.addEventListener("submit", submitForm)
