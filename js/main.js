document.addEventListener('DOMContentLoaded', function () {

  const body = document.getElementById('body');
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
      // удалим у кнопки класс btn-up_hide
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
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
