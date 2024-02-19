const toggleBtn = document.querySelector('.moon-sun-toggle');
const rightArrow = document.querySelectorAll('.right-arrow');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.src = "./images/navbar/sun.svg";
        rightArrow.forEach(arrow => arrow.src = "./images/management/right-arrow-white.svg");
    }
    else{
        toggleBtn.src = "./images/navbar/moon.svg";
        rightArrow.forEach(arrow => arrow.src = "./images/management/right-arrow.svg");
    }
})