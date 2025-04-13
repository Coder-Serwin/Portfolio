const navbar = document.getElementById("navbar")

function OpenSidebar() {
    navbar.classList.add("show")
}

function CloseSidebar() {
    navbar.classList.remove("show")
}




 let ticking = false;

$(window).on('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      if ($(window).scrollTop() > 515) {
        $('.hide').css({
          'visibility': 'hidden',
          'opacity': 0
        });
      } else {
        $('.hide').css({
          'visibility': 'visible',
          'opacity': 1
        });
      }
      ticking = false;
    });

    ticking = true;
  }
});

let ticking1 = false;

$(window).on('scroll', function () {
  if (!ticking1) {
    window.requestAnimationFrame(function () {
      if ($(window).scrollTop() > 10) {
        $('.scroll').css({
          'visibility': 'hidden',
          'opacity': 0
        });
      } else {
        $('.scroll').css({
          'visibility': 'visible',
          'opacity': 1
        });
      }
      ticking1 = false;
    });

    ticking1 = true;
  }
});