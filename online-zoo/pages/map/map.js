/*Change theme color start*/
const changeThemeBtn = document.getElementById('changeTheme');
const mobileIcon = document.getElementById('mobileIcon');
const closeMobileIcon = document.getElementById('closeMobileNavIcon');
let colorTheme = '';
const map = document.getElementById('map');
const mapSlider = document.getElementById('mapSlider');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const mapSliderItems = document.querySelectorAll('.item');
const currentNumberElement = document.getElementById('map-slider-current-number');
const range = document.getElementById('range');
let currentIdx = 1;
let animal = '';

const watchOnlineBtn = document.getElementById('watchOnline');

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
  const leftArrowPath = leftArrow.querySelector('path');
  const rightArrowPath = rightArrow.querySelector('path');
  if (colorTheme === 'dark') {
    leftArrowPath.style.fill = '#ffffff';
    rightArrowPath.style.fill = '#ffffff';
  } else {
    leftArrowPath.style.fill = '#333333';
    rightArrowPath.style.fill = '#333333';
  }
}

function changeHeaderBg() {
  colorTheme === 'dark'
    ? document.body.style.setProperty('--header-bg', '#333333')
    : document.body.style.setProperty('--header-bg', '#ffffff');
}

function changeMainBg(el) {
  colorTheme === 'dark'
    ? document.body.style.setProperty('--main-bg', '#4f4f4f')
    : document.body.style.setProperty('--main-bg', '#fbfbfb');
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
    if (window.innerWidth === 1200 || window.innerWidth < 1200) {
      map.style.backgroundImage = 'url("../../assets/img/map/dark-map-1200px.png")';
    } else {
      map.style.backgroundImage = 'url("../../assets/img/map/dark-map.png")';
    }
  } else {
    if (window.innerWidth === 1200 || window.innerWidth < 1200) {
      map.style.backgroundImage = 'url("../../assets/img/map/map-1200px.png")';
    } else {
      map.style.backgroundImage = 'url("../../assets/img/map/map.png")';
    }
  }
}

function saveColorThemeToLS(color) {
  localStorage.setItem('theme', color);
}

function getColorThemeFromLS() {
  return localStorage.getItem('theme');
}
/*Change theme color end*/

/*Map markers start*/
function removeActiveMarker() {
  const markers = document.querySelectorAll('.map-marker');
  markers.forEach((marker) => {
    if (marker.classList.contains('active-marker')) {
      marker.classList.remove('active-marker');
    }
  });
}

function setWatchOnlineBtnLink(animal) {
  if (animal) {
    watchOnlineBtn.href = `../zoos/${animal}/${animal}.html`;
  } else {
    watchOnlineBtn.href = `#`;
  }
}

map.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.map-marker')) {
    removeActiveMarker();
    const marker = target.closest('.map-marker');
    animal = marker.parentElement.title.toLowerCase();
    currentIdx = +marker.parentElement.dataset.number;

    removeActiveItem();
    updateCurrentNumberEl();
    setActiveItem();
    setRangeValue();
    setWatchOnlineBtnLink(animal);
    marker.classList.add('active-marker');
  }
});
/*Map markers end*/

/*Map slider start*/
function updateCurrentNumberEl() {
  currentNumberElement.textContent = `0${currentIdx + 1}`;
}

function nextItem() {
  currentIdx += 1;
}

function prevItem() {
  currentIdx -= 1;
}

function removeActiveItem() {
  mapSliderItems.forEach((item) => {
    const img = item.querySelector('.active-li-wrapper img');
    if (item.classList.contains('active-li-wrapper')) {
      item.classList.remove('active-li-wrapper');
      img.style.width = '108px';
      img.style.height = '108px';
    }
  });
}

function setActiveItem() {
  if (currentIdx < 0) {
    currentIdx = mapSliderItems.length - 1;
  }

  if (currentIdx > mapSliderItems.length - 1) {
    currentIdx = 0;
  }

  mapSliderItems.forEach((item, idx) => {
    if (idx == currentIdx) {
      const img = item.querySelector('img');
      item.classList.add('active-li-wrapper');
      img.style.width = '137px';
      img.style.height = '137px';
    }
  });
}

function setRangeValue() {
  range.value = currentIdx + 1;
}

function setAnimal() {
  const name = document.querySelector('.active-li-wrapper').dataset.animal;
  animal = name;
}

function setActiveMarker() {
  const markers = document.querySelectorAll('.map-marker');
  markers.forEach((marker) => {
    if (marker.parentElement.title.toLocaleLowerCase() === animal) {
      marker.classList.add('active-marker');
    }
  });
}

range.addEventListener('input', (e) => {
  const val = e.target.value - 1;
  currentIdx = val;
  updateCurrentNumberEl();
  removeActiveItem();
  setActiveItem();

  setAnimal();
  removeActiveMarker();
  setActiveMarker();
  setWatchOnlineBtnLink(animal);
});

rightArrow.addEventListener('click', () => {
  nextItem();
  removeActiveItem();
  setActiveItem();
  updateCurrentNumberEl();
  setRangeValue();

  setAnimal();
  removeActiveMarker();
  setActiveMarker();
  setWatchOnlineBtnLink(animal);
});

leftArrow.addEventListener('click', () => {
  prevItem();
  removeActiveItem();
  setActiveItem();
  updateCurrentNumberEl();
  setRangeValue();

  setAnimal();
  removeActiveMarker();
  setActiveMarker();
  setWatchOnlineBtnLink(animal);
});
/*Map slider end*/
