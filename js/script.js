// ====================================
// ARYEO WEBSITE
// Main JavaScript File
// ====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("ARYEO Website Loaded");

});

// Current year
const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Active navigation
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".main-nav a").forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});

// Sticky header
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    observer.observe(section);

});
