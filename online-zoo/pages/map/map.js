/*Change theme color start*/
const changeThemeBtn = document.getElementById('changeTheme');
const mobileIcon = document.getElementById('mobileIcon');
const closeMobileIcon = document.getElementById('closeMobileNavIcon');
let colorTheme = '';
const map = document.getElementById('map')
;
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

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
  if (colorTheme === "dark") {
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
    map.style.backgroundImage = 'url("../../assets/icons/map/dark-map.svg")';
  } else {
    map.style.backgroundImage = 'url("../../assets/icons/map/map.svg")';
  }
}

function saveColorThemeToLS(color) {
  localStorage.setItem('theme', color);
}

function getColorThemeFromLS() {
  return localStorage.getItem('theme');
}
/*Change theme color end*/