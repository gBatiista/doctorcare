function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  sectionMarker(home)
  sectionMarker(services)
  sectionMarker(about)
  sectionMarker(contact)
}

function sectionMarker(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionBottom = section.offsetTop + section.offsetHeight

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionTop <= targetLine && sectionBottom >= targetLine) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector('#navigation');

  if (scrollY >= 55) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY >= 450) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500
}).reveal(`
  #home,
  #home img,
  .stats,
  #services,
  #about,
  #contact`)
