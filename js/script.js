// Menu const
const bg_activeM = document.querySelector(".bg_activeM")
const menu = document.querySelector(".menu")
const open_menu = document.querySelector("#open_menu")
const close_menu = document.querySelector(".close-menu")
const body = document.querySelector('body')
const header__article = document.querySelector(".header__article")

// Tabs const
const tabs__nav = document.querySelectorAll(".tabs__nav-item")
const tabs__content = document.querySelectorAll(".tab")

// Menu fun
open_menu.addEventListener('click', () => {
  menu.classList.toggle("menu-isActive")
  close_menu.classList.toggle("close-menu-isActive")
  bg_activeM.classList.toggle("bg_activeMA")
  body.style.overflow = "hidden"
  header__article.classList.toggle("header__article-isActive")
})

close_menu.addEventListener('click', () => {
  menu.classList.toggle("menu-isActive")
  close_menu.classList.toggle("close-menu-isActive")
  bg_activeM.classList.toggle("bg_activeMA")
  body.style.overflow = "auto"
  header__article.classList.toggle("header__article-isActive")
})

// Dropdown
document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );
  const inner__btn = document.querySelector('.inner__btn')

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      inner__btn.innerText = this.innerText;
      inner__btn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});

// Slider 
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  slidesPerView: 3,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  watchSlidesProgress: true,
  speed: 300,
  additionalSlide: 1,
});

const sliderHeaderGame = new Swiper('.tabs__nav', {
  direction: "horizontal",
  navigation: {
    nextEl: ".tabs_nav__next",
    prevEl: ".tabs_nav__prev",
  },
  speed: 300,
  freeMode: true,
  createElements: true,
  // simulateTouch: false,
  breakpoints: {
    992: {
      slidesPerView: 7,
      navigation: false
    },

  }
});

// Tabs
for (let i = 0; i < tabs__nav.length; i++) {
  tabs__nav[i].addEventListener('click', () => {
    console.log('click')
    document.querySelector('.tabs__nav-item-active').classList.toggle('tabs__nav-item-active')
    tabs__nav[i].classList.toggle('tabs__nav-item-active')
    document.querySelector('.tab-active').classList.toggle('tab-active')
    tabs__content[i].classList.toggle('tab-active')
  })
}

