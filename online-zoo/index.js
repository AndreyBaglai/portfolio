/*Change theme color start*/
const changeThemeBtn = document.getElementById('changeTheme');
const mobileIcon = document.getElementById('mobileIcon');
const closeMobileIcon = document.getElementById('closeMobileNavIcon');
const map = document.getElementById('map');
const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');

let colorTheme = '';

document.addEventListener('DOMContentLoaded', () => {
  colorTheme = getColorThemeFromLS();
  if (colorTheme === 'dark') {
    changeThemeBtn.checked = true;
    changeHeaderBg();
    changeMainBg();
    changeTextColor();
    changeHeaderLogoColor();
    changeMobileIconColor();
    changeMobileCloseBtn();
    changeMapSVG();
    changeColorArrowsSlider();
  }
});

mobileIcon.addEventListener('click', () => {
  const nav = document.getElementById('mobileNav');
  nav.style.top = '0';
});

closeMobileIcon.addEventListener('click', () => {
  const nav = document.getElementById('mobileNav');
  nav.style.top = '-1000px';
});

changeThemeBtn.addEventListener('change', (e) => {
  const checkbox = e.currentTarget;

  if (checkbox.checked) {
    saveColorThemeToLS('dark');
    colorTheme = getColorThemeFromLS();
  } else {
    saveColorThemeToLS('light');
    colorTheme = getColorThemeFromLS();
  }

  changeHeaderBg();
  changeMainBg();
  changeTextColor();
  changeHeaderLogoColor();
  changeMobileIconColor();
  changeMobileCloseBtn();
  changeMapSVG();
  changeColorArrowsSlider();
});

function changeColorArrowsSlider() {
  leftArrows.forEach((arrow) => {
    const leftArrowPath = arrow.querySelector('path');

    if (colorTheme === 'dark') {
      leftArrowPath.style.fill = '#ffffff';
    } else {
      leftArrowPath.style.fill = '#333333';
    }
  });

  rightArrows.forEach((arrow) => {
    const rightArrowPath = arrow.querySelector('path');
    if (colorTheme === 'dark') {
      rightArrowPath.style.fill = '#ffffff';
    } else {
      rightArrowPath.style.fill = '#333333';
    }
  });
}

function changeMainBg(el) {
  if (colorTheme === 'dark') {
    document.body.style.setProperty('--primary-bg-color', '#3c3c3c');
    document.body.style.setProperty('--secondary-bg-color', '#4f4f4f');
    document.body.style.setProperty('--testimonial-bg', '#4f4f4f');
  } else {
    document.body.style.setProperty('--primary-bg-color', '#fbfbfb');
    document.body.style.setProperty('--secondary-bg-color', '#f2f2f2');
    document.body.style.setProperty('--testimonial-bg', '#fefefe');
  }
}

function changeHeaderBg() {
  colorTheme === 'dark'
    ? document.body.style.setProperty('--header-bg', '#333333')
    : document.body.style.setProperty('--header-bg', '#ffffff');
}

function changeTextColor() {
  if (colorTheme === 'dark') {
    document.body.style.setProperty('--text-color', '#fefefe');
    document.body.style.setProperty('--text-subColor', '#f2f2f2');
  } else {
    document.body.style.setProperty('--text-color', '#333333');
    document.body.style.setProperty('--text-subColor', '#4f4f4f');
  }
}

function changeHeaderLogoColor() {
  const logoPaths = document.querySelectorAll('#headerLogo path');

  [...logoPaths].forEach((path) => {
    colorTheme === 'dark' ? (path.style.fill = '#ffffff') : (path.style.fill = '#333333');
  });
}

function changeMobileIconColor() {
  const iconLines = document.querySelectorAll('#mobileNavSvg line');

  [...iconLines].forEach((line) => {
    colorTheme === 'dark' ? (line.style.stroke = '#ffffff') : (line.style.stroke = '#333333');
  });
}

function changeMobileCloseBtn() {
  const closeIcon = document.querySelector('#closeMobileNavIcon svg');

  colorTheme === 'dark' ? (closeIcon.style.fill = '#ffffff') : (closeIcon.style.fill = '#333333');
}

function changeMapSVG() {
  if (colorTheme === 'dark') {
    map.style.backgroundImage = 'url("./assets/icons/map/dark-map.svg")';
  } else {
    map.style.backgroundImage = 'url("./assets/icons/map/map.svg")';
  }
}

function saveColorThemeToLS(color) {
  localStorage.setItem('theme', color);
}

function getColorThemeFromLS() {
  return localStorage.getItem('theme');
}
/*Change theme color end*/

/*Pets in zoo slider start*/
const petsInZooLeftArrow = document.getElementById('petsInZooLeftArrow');
const petsInZooRightArrow = document.getElementById('petsInZooRightArrow');
const petsInZooSlider = document.getElementById('petsInZooSlider');
const rangePetsInZoo = document.getElementById('rangePetsInZoo');
const petsInZooCurrentNumberEl = document.getElementById('pets-in-zoo-current-number');
const petsItems = document.querySelectorAll('.pets-in-zoo-slider .item');

let petsCurrentIndex = 0;

function setActivePet(n) {
  removeActivePet();
  petsItems.forEach((pet, idx) => {
    if (idx === petsCurrentIndex) {
      pet.classList.add('active-item');
    }
  });
}

function removeActivePet() {
  petsItems.forEach((pet) => {
    if (pet.classList.contains('active-item')) {
      pet.classList.remove('active-item');
    }
  });
}

function setCurrentNumber() {
  petsInZooCurrentNumberEl.innerHTML = '';
  petsInZooCurrentNumberEl.innerHTML = `0${petsCurrentIndex + 1}/`;
}

function sliderTransform(n) {
  switch (n) {
    case 0:
    case 1:
    case 2:
    case 3:
      petsInZooSlider.style.right = '0';
      break;
    case 4:
      petsInZooSlider.style.right = '300px';
      break;
    case 5:
      petsInZooSlider.style.right = '600px';
      break;
    case 6:
      petsInZooSlider.style.right = '900px';
      break;
    case 7:
      petsInZooSlider.style.right = '1200px';
      break;
  }
}

function setRangeValuePetInZoo() {
  rangePetsInZoo.value = petsCurrentIndex + 1;
}

petsInZooRightArrow.addEventListener('click', () => {
  petsCurrentIndex++;
  if (petsCurrentIndex > petsItems.length - 1) {
    petsCurrentIndex = 0;
  }

  sliderTransform(petsCurrentIndex);
  setCurrentNumber();
  setActivePet();
  setRangeValuePetInZoo();
});

petsInZooLeftArrow.addEventListener('click', () => {
  petsCurrentIndex--;
  if (petsCurrentIndex < 0) {
    petsCurrentIndex = petsItems.length - 1;
  }

  sliderTransform(petsCurrentIndex);
  setCurrentNumber();
  setActivePet();
  setRangeValuePetInZoo();
});

rangePetsInZoo.addEventListener('input', (e) => {
  const value = e.target.value;
  petsCurrentIndex = value - 1;

  sliderTransform(petsCurrentIndex);
  setCurrentNumber();
  setActivePet();
});
/*Pets in zoo slider end*/

/*Favorite slider start*/
const favoriteCurrentEl = document.getElementById('current-number');
const favoriteSlider = document.getElementById('favoriteSlider');
const favoriteSliderItems = document.querySelectorAll('#favoriteSlider .item');
const rangeFavoriteSlider = document.getElementById('favorite-slider-range');

let favoriteCurrentIndex = 2;

function setFavoriteCurrentNumber() {
  favoriteCurrentEl.innerHTML = '';
  favoriteCurrentEl.innerHTML = `0${favoriteCurrentIndex}/`;
}

function setRangeFavoriteValue() {
  rangeFavoriteSlider.value = favoriteCurrentIndex;
}

function removeFavoriteActivePet() {
  favoriteSliderItems.forEach((pet) => {
    if (pet.classList.contains('active-item')) {
      const description = pet.querySelector('.slider-text-favorite-wrapper');

      pet.classList.remove('active-item');
      pet.removeChild(description);
    }
  });
}

function addDescription() {
  const div = document.createElement('div');
  div.classList.add('slider-text-favorite-wrapper');
  div.innerHTML = `<p>
                      Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves
                      bamboos.
                    </p>
                    <div class="buttons-wrapper">
                      <a href="./pages/zoos/panda/panda.html" class="btn watch-btn">
                        <span
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="11.5" stroke="url(#paint0_linear)" />
                            <path d="M16 12L10 15.4641V8.5359L16 12Z" fill="url(#paint1_linear)" />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="-4.48125"
                                y1="-1.26175e-07"
                                x2="28.4614"
                                y2="10"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#4BD8B5" />
                                <stop offset="1" stop-color="#49D6DF" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear"
                                x1="16"
                                y1="6.50625"
                                x2="12.6667"
                                y2="17.4871"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#4BD8B5" />
                                <stop offset="1" stop-color="#49D6DF" />
                              </linearGradient>
                            </defs>
                          </svg> </span
                        >watch online
                      </a>
                      <a href="#" class="btn donate-btn">
                        <span
                          ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="11.5" stroke="white" />
                            <path
                              d="M14.1982 15.6602C14.1982 15.1621 14.04 14.752 13.7236 14.4297C13.4072 14.1016 12.8799 13.8086 12.1416 13.5508C11.4033 13.2871 10.8291 13.0439 10.4189 12.8213C9.05371 12.0889 8.37109 11.0049 8.37109 9.56934C8.37109 8.59668 8.66699 7.79687 9.25879 7.16992C9.85059 6.54297 10.6533 6.1709 11.667 6.05371V4.1377H13.0732V6.07129C14.0928 6.21777 14.8809 6.65137 15.4375 7.37207C15.9941 8.08691 16.2725 9.01855 16.2725 10.167H14.1455C14.1455 9.42871 13.9785 8.84863 13.6445 8.42676C13.3164 7.99902 12.8682 7.78516 12.2998 7.78516C11.7373 7.78516 11.2979 7.9375 10.9814 8.24219C10.665 8.54688 10.5068 8.9834 10.5068 9.55176C10.5068 10.0615 10.6621 10.4717 10.9727 10.7822C11.2891 11.0869 11.8223 11.377 12.5723 11.6523C13.3223 11.9277 13.9111 12.1826 14.3389 12.417C14.7666 12.6514 15.127 12.9209 15.4199 13.2256C15.7129 13.5244 15.9385 13.8701 16.0967 14.2627C16.2549 14.6553 16.334 15.1152 16.334 15.6426C16.334 16.6328 16.0293 17.4355 15.4199 18.0508C14.8164 18.666 13.9727 19.0293 12.8887 19.1406V20.8545H11.4912V19.1494C10.3311 19.0205 9.4375 18.6045 8.81055 17.9014C8.18945 17.1982 7.87891 16.2666 7.87891 15.1064H10.0146C10.0146 15.8447 10.1992 16.416 10.5684 16.8203C10.9434 17.2246 11.4707 17.4268 12.1504 17.4268C12.8184 17.4268 13.3252 17.2656 13.6709 16.9434C14.0225 16.6211 14.1982 16.1934 14.1982 15.6602Z"
                              fill="white"
                            />
                          </svg> </span
                        >donate
                      </a>
                    </div>`;
  return div;
}

function moveFavoriteSlide(animal) {
  switch (animal) {
    case 'eagle': {
      favoriteCurrentIndex = 1;
      favoriteSlider.style.left = '188px';
      break;
    }
    case 'panda': {
      favoriteCurrentIndex = 2;
      favoriteSlider.style.left = '0';
      break;
    }
    case 'gorilla': {
      favoriteCurrentIndex = 3;
      favoriteSlider.style.left = '-186px';
      break;
    }
    case 'alligator': {
      favoriteCurrentIndex = 4;
      favoriteSlider.style.left = '-372px';
      break;
    }
    case 'fox': {
      favoriteCurrentIndex = 5;
      favoriteSlider.style.left = '-558px';
      break;
    }
    case 'elephant': {
      favoriteCurrentIndex = 6;
      favoriteSlider.style.left = '-744px';
      break;
    }
    case 'tiger': {
      favoriteCurrentIndex = 7;
      favoriteSlider.style.left = '-930px';
      break;
    }
    case 'sloth': {
      favoriteCurrentIndex = 8;
      favoriteSlider.style.left = '-1116px';
      break;
    }
  }
}

favoriteSlider.addEventListener('click', (e) => {
  const item = e.target.parentElement;
  if (item.classList.contains('item') && !item.classList.contains('active-item')) {
    const animal = item.dataset.animal;
    removeFavoriteActivePet();

    item.classList.add('active-item');
    item.appendChild(addDescription());
    moveFavoriteSlide(animal);
    setFavoriteCurrentNumber();
    setRangeFavoriteValue();
  }
});

rangeFavoriteSlider.addEventListener('input', (e) => {
  favoriteSliderItems.forEach((pet, idx) => {
    if (idx === e.target.value-1) {
      const animal = pet.dataset.animal;
      removeFavoriteActivePet();

      pet.classList.add('active-item');
      pet.appendChild(addDescription());
      moveFavoriteSlide(animal);
      setFavoriteCurrentNumber();
    }
  });
});
/*Favorite slider end*/
