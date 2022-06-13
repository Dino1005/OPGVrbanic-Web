const vrh = document.querySelector(".vrh");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 150) {
    vrh.classList.add("active");
  }
  else{
    vrh.classList.remove("active");
  }
})

vrh.addEventListener("click", () => {
  window.scroll({
    top: 0, 
    behavior: 'smooth'
  });
})


