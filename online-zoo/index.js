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
