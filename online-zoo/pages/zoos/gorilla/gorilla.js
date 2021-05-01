/*Change theme color start*/
const changeThemeBtn = document.getElementById('changeTheme');
const mobileIcon = document.getElementById('mobileIcon');
const closeMobileIcon = document.getElementById('closeMobileNavIcon');
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
});

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

function saveColorThemeToLS(color) {
  localStorage.setItem('theme', color);
}

function getColorThemeFromLS() {
  return localStorage.getItem('theme');
}
/*Change theme color end*/

/*Aside slider start*/
const asideSlider = document.getElementById('asideSlider');
const topArrow = document.getElementById('topArrow');
const bottomArrow = document.getElementById('bottomArrow');
let currentIdx = 0;
const asideItems = asideSlider.querySelectorAll('.item');

function removeActiveItem() {
  asideItems.forEach(item => {
    const img = item.querySelector('.active-li-wrapper img');
    if (item.classList.contains('active-li-wrapper')) {
      item.classList.remove('active-li-wrapper');
      img.style.width = '108px';
      img.style.height = '108px';
    }
  });
}

function nextItem() {
  currentIdx += 1;
}

function prevItem() {
  currentIdx -= 1;
}

function setActiveItem() {
  if (currentIdx < 0) {
    currentIdx = asideItems.length - 1;
  }

  if (currentIdx > asideItems.length - 1) {
    currentIdx = 0;
  }

  asideItems.forEach((item, idx) => {
    if (idx == currentIdx) {
      const img = item.querySelector('img');
      item.classList.add('active-li-wrapper');
      img.style.width = '137px';
      img.style.height = '137px';
    }
  });
}

bottomArrow.addEventListener('click', () => {
  nextItem();
  removeActiveItem();
  setActiveItem();
});

topArrow.addEventListener('click', () => {
  prevItem();
  removeActiveItem();
  setActiveItem();
});
/*Aside slider end*/

/*Popup start*/
const feedBtn = document.getElementById('feedBtn');
const popupWrp = document.querySelector('.popup-wrapper');

feedBtn.addEventListener('click', () => {
  popupWrp.style.display = 'block';
});

popupWrp.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-wrapper')) {
    popupWrp.style.display = 'none';
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    popupWrp.style.display = 'none';
  }
});
/*Popup end*/

/*Video slider start*/
const mainBroadcastEl = document.getElementById('mainBroadcast');
const videoSlider = document.getElementById('videoSlider');

videoSlider.addEventListener('click', (e) => {
  if (e.target.classList.contains('video-slider-item')) {
    const subVideo = e.target.querySelector('.sub-live-broadcast');
    const mainVideo = mainBroadcastEl.querySelector('.live-broadcast');
    const description = mainBroadcastEl.querySelector('.animal-description');

    subVideo.classList.remove('sub-live-broadcast');
    subVideo.classList.add('live-broadcast');
    subVideo.width = '790px';
    subVideo.height = '442px';

    mainVideo.classList.remove('live-broadcast');
    mainVideo.classList.add('sub-live-broadcast');
    mainVideo.width = '246px';
    mainVideo.height = '141px';

    mainBroadcastEl.removeChild(mainVideo);
    e.target.innerHTML = '';

    mainBroadcastEl.insertBefore(subVideo, description);
    e.target.appendChild(mainVideo);
  }
});
/*Video slider end*/