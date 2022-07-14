// 검색챵 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 요소 내부 실제 input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function() {
  if(window.scrollY > 500) {
    // badge 요소 숨기기
    gsap.to(badgeEl, .6, { opacity: 0, display: 'none' });
    // toTop 버튼 보이기
    gsap.to(toTopEl, .6, { opacity: 1, x: 0});
  }
  else {
    // badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // toTop 버튼 숨기기
    gsap.to(toTopEl, .6, { opacity: 0, x: 100});
  }
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, { scrollTo:0});
});

// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    opacity: 1
  });
});

// Swiper
new Swiper('.notice .swiper', {
  direction: 'vertical',  // 수직 슬라이드로 설정
  autoplay: true,         // 자동 재생 여부
  loop: true              // 반복 재생 여부
});

new Swiper('.promotion .swiper', {
  //direction: 'horizontal',  // 수평 슬라이드로 설정 (기본)
  autoplay: true,             // 자동 재생 여부
  loop: true,                 // 반복 재생 여부
  slidesPerView: 3,           // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,           // 슬라이드 사이 여백
  centeredSlides: true,       // 1번 슬라이드가 가운데 보이게 하기
  pagination: {
    el: '.promotion .swiper-pagination',   // 페이지 번호 요소
    clickable: true           // 페이지 번호 클릭하여 슬라이드 이동
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next"
  }
});

// 토글 버튼
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글 버튼 클릭 시
promotionToggleBtn.addEventListener('click', function() {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  }
  else {
    promotionEl.classList.add('hide');
  }
});

// 부유요소1
gsap.to('.floating1', 1.5, {
  delay: 1,               // 애니메이션 지연 시간 설정
  y: 15,                  // transform: translate(Y)수치 (수직으로 움직일 거리)
  repeat: -1,             // 반복 횟수, -1은 무한 반복
  yoyo: true,             // 재생한 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut  // 속도 변화 함수 Easing 적용
});

// 부유요소2
gsap.to('.floating2', 1.5, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
// 부유요소3
gsap.to('.floating3', 1.5, {
  delay: 1.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


// 스크롤 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic 
  .Scene({                                  // 감시할 장면(Scene)을 추가
    triggerElement: spyEl,                  // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8                         // 화면에 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show')            // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());     // 컨트롤러에 장면을 할당 (필수!)
});


new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next"
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();