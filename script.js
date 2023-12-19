function toggle_nav() {
  const nav = document.getElementById('nav-links')
  nav.classList.toggle('hidden')
}

let slideIndex = 1;

function show_slides(index) {
  const slides = document.getElementsByClassName('slides')
  slideIndex = slideIndex + index 
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}


show_slides(slideIndex)