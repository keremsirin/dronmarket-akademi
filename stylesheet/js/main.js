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
  var y = document.getElementsByClassName('glider-remove')[1]
  if (window.innerWidth > 992) {
    x.classList.remove('glider')
    y.classList.remove('glider2')
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
        dots: '.dots',
        scrollLock: true
      })
      y.classList.add('glider2')
      new Glider(document.querySelector('.glider2'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: '.dots2',
        scrollLock: true
      })
    })
  }
}
removeGlider()

// window.addEventListener('resize', function (event) {
//   removeGlider()
// })
