function menuToggle() {
  var x = document.getElementById('navigations')
  if (x.classList.contains('translateX-100')) {
    x.classList.remove('translateX-100')
    x.classList.add('translateX-0')
  } else {
    x.classList.remove('translateX-0')
    x.classList.add('translateX-100')
  }
}
document.getElementById('hamburger-menu').onclick = menuToggle