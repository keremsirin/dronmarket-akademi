function menuToggle() {
  var x = document.getElementById('navigations')
  if (x.classList.contains('translateY-150')) {
    x.classList.remove('translateY-150')
    x.classList.add('translateY-0')
    document.getElementsByTagName('main')[0].style.zIndex = '-1';
  } else {
    x.classList.remove('translateY-0')
    x.classList.add('translateY-150')
    setTimeout(function(){
      document.getElementsByTagName('main')[0].style.zIndex = '0';
    }, 300); 
  }
}
document.getElementById('hamburger-menu').onclick = menuToggle