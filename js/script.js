document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );
  const menu__element = document.querySelector('.menu__elementDrop')

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  // dropDownBtn.addEventListener("mouseenter", function (e) {
  //   if (dropDownList.className !== "dropdown__list dropdown__list--visible") {
  //     dropDownList.classList.toggle("dropdown__list--visible");
  //   }
  //   this.classList.add("dropdown__button--active");
  // });



  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
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

  // dropDownList.addEventListener("mouseleave", (e) => {
  //   console.log(e.relatedTarget)
  //   if (e.relatedTarget !== menu__element) {
  //     dropDownList.classList.toggle("dropdown__list--visible");
  //   }
  // });

  // dropDownBtn.addEventListener("mouseleave", (e) => {
  //   console.log(e.relatedTarget)
  //   if (e.relatedTarget !== menu__element) {
  //     dropDownList.classList.toggle("dropdown__list--visible");
  //   }
  // });



  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  centeredSlides: true,
  watchSlidesProgress: true,
});

const bg_activeM = document.querySelector(".bg_activeM")
const menu = document.querySelector(".menu")
const open_menu = document.querySelector(".open-menu")
const close_menu = document.querySelector(".close-menu")
const body = document.querySelector('body')
const header__article = document.querySelector(".header__article")

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

