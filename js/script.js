var toggleBar = document.querySelector(".toggle-bar"),
    linksContainer = document.querySelector(".links-container"),
    mainContent = document.querySelector("main"),
    scrollTopBtn = document.getElementById("scroll-btn"),
    rootElement = document.documentElement;

toggleBar.addEventListener("click", function(){
    this.classList.toggle("close");
    linksContainer.classList.toggle("open-links");
    mainContent.classList.toggle("hidden");
});

function ScrollTop(){
    rootElement.scrollTo({
    top: 0
        })
    }

scrollTopBtn.addEventListener("click", ScrollTop);
