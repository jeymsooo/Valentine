function moveButton() {
    let button = document.getElementById("noButton");
    let container = document.querySelector(".container");
    
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;
    
    let rect = button.getBoundingClientRect();
    let currentX = rect.left + window.scrollX;
    let currentY = rect.top + window.scrollY;
    
    let randomX = Math.random() * (viewportWidth - buttonWidth);
    let randomY = Math.random() * (viewportHeight - buttonHeight);
    
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${currentX + buttonWidth / 2}px`;
    heart.style.top = `${currentY + buttonHeight / 2}px`;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
    
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}
