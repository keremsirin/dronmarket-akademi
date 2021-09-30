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

function removeGlider() {
  var x = document.getElementsByClassName('glider-remove')[0]
  if (window.innerWidth > 992) {
    x.classList.remove('glider')
  } else {
    // window.addEventListener('resize', function () {
    //   x.classList.add('glider')
    //   new Glider(document.querySelector('.glider'), {
    //     slidesToScroll: 1,
    //     slidesToShow: 1,
    //     draggable: true,
    //     dots: '.dots'
    //   })
    // })
    window.addEventListener('load', function () {
      x.classList.add('glider')
      new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.dots'
      })
    })
  }
}
removeGlider()

// window.addEventListener('resize', function (event) {
//   removeGlider()
// })
