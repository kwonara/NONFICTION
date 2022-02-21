
const modal = document.querySelector(".modal");
const button = document.querySelector(".myBtn");
const close = document.querySelector(".close");
button.addEventListener("click",()=>{
    modal.style.display = "block";
});

close.addEventListener("click",()=>{
    modal.style.display = "none";
})

window.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target == modal){
        modal.style.display = "none";
    }
})
//==============================================================
let slideIndex = 1; 
showSlides(slideIndex);
function showSlides(n){
    console.log(n)
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length};

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
}
//dot버튼 클릭시
function currentSlide(n){
    showSlides(slideIndex = n);
}
//========================================================

//nav toggle
const toggleBtn = document.querySelector('.toggle');
const gnb = document.querySelector('.gnb');
const join = document.querySelector('.join');

toggleBtn.addEventListener('click',()=>{
    gnb.classList.toggle('active');
    join.classList.toggle('active');
});
//========================================================
