// ====================================
// ARYEO WEBSITE
// Main JavaScript File
// ====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("ARYEO Website Loaded");

});
const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

Now e
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".main-nav a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});
