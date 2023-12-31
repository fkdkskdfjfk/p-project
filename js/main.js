new Swiper('.aiService .swiper', {
  loop: true, 
  autoplay: false, 
  slidesPerView: 4, // 한번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 0, // 슬라이드 사이 여백(간격) px
  navigation: {
    nextEl: '.aiService .swiper-button-next', 
    prevEl: '.aiService .swiper-button-prev'
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    }

  }
});

// to-top
const toTopEl = document.querySelector('#to-top');
console.log(toTopEl);
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0 
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500 ) {
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100
    });
  }
});

// 스크롤 시 튀어나오는 효과
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8 
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

// 헤더 고정
const headerEl = document.querySelector('.headerBox');

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 150 ) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});

// 헤더의 contact 아이콘 클릭 시 이동
const contactIconEl = document.querySelector('.contactIcon');

contactIconEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 5900 
  });
});

// 모바일 메뉴 열기/닫기
const hamburgerEl = document.querySelector('.btn-hamburger');
const btn_closeEl = document.querySelector('.btn-close');
const bgEl = document.querySelector('.bg');

hamburgerEl.addEventListener('click', function () {
  bgEl.classList.add('active');
});
btn_closeEl.addEventListener('click', function () {
  bgEl.classList.remove('active');
});

// 서비스 신청/문의 버튼 마우스 올렸을 때 떠다니는 animation

