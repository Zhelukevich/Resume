document.addEventListener('DOMContentLoaded', function () {

  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 50) {
      header.classList.add('black')
    } else {
      header.classList.remove('black')
    }
  });


  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();

  // SWIPER
  new Swiper(".portfolio__swiper", {
    keyboard: {
      enabled: true,
    },

    speed: 800,

    navigation: {
      nextEl: ".portfolio__swiper-button-next",
      prevEl: ".portfolio__swiper-button-prev",
    },

    pagination: {
      el: '.portfolio__swiper-pagination',
      type: 'bullets',
      clickable: {
        boolean: true,
      },
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      665: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
      },
      1700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  });

  // BURGER
  const burger = document.getElementById('burger');
  const headerID = document.getElementById('header');
  const navLink = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', function () {
    headerID.classList.toggle('open');
  })

  navLink.forEach(function (el) {
    el.addEventListener('click', function () {
      headerID.classList.toggle('open');
    })

  })

})
