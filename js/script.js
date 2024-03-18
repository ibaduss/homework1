function checkWindowSize() {
    var navbar = document.getElementById("myNavbar");
    if (window.innerWidth < 992) {
        navbar.classList.add("bg-light");
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
    } else {
        navbar.classList.remove("bg-light");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
    }
}
var navbar = document.getElementById("myNavbar");
var isPageScrolled = false;

// Sayfa aşağı kaydırıldığında değişkeni güncelle
window.addEventListener("scroll", function() {
    if (window.scrollY > 0 && window.innerWidth > 992) {
        isPageScrolled = true;
        navbar.classList.add("bg-light");
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
    } else {
        isPageScrolled = false;
        if (!navbar.classList.contains("navbar-toggler")) { // Navbar mobil görünümdeyken arka plan rengini değiştirmemek için kontrol eklendi
            checkWindowSize(); // Ekran genişliğine göre navbar stilini güncelle
        }
    }
});

// Navbar üzerine gelindiğinde farklı class'ı ekle
navbar.addEventListener("mouseenter", function() {
    if (!isPageScrolled && window.innerWidth > 992) {
        navbar.classList.add("bg-light");
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
    }
});

// Navbar'dan çıkıldığında farklı class'ı kaldır
navbar.addEventListener("mouseleave", function() {
    if (!isPageScrolled && window.innerWidth > 992) {
        navbar.classList.remove("bg-light");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        navbar.style.transition = "background-color 0.3s ease-in-out";
    }
});

// Pencere boyutu değiştiğinde navbar'ın stilini güncelle
window.addEventListener("resize", function() {
    checkWindowSize();
});

// Sayfa yüklendiğinde de navbar'ın stilini güncelle
window.addEventListener("load", function() {
    checkWindowSize();
});
