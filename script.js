function moveButton() {
    let button = document.getElementById("noButton");
    let container = document.querySelector(".container");
    
    // Get viewport dimensions
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    
    // Get button dimensions
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;
    
    // Get current position
    let rect = button.getBoundingClientRect();
    let currentX = rect.left + window.scrollX;
    let currentY = rect.top + window.scrollY;
    
    // Generate random positions within bounds
    let randomX = Math.random() * (viewportWidth - buttonWidth);
    let randomY = Math.random() * (viewportHeight - buttonHeight);
    
    // Create heart element
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${currentX + buttonWidth / 2}px`;
    heart.style.top = `${currentY + buttonHeight / 2}px`;
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
    
    // Apply new position
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}