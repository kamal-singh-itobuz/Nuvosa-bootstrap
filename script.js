const toggleBtn = document.querySelector('.moon-sun-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.src = "./images/navbar/sun.svg";
    }
    else toggleBtn.src = "./images/navbar/moon.svg";
})