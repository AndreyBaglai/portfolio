const changeThemeBtn = document.getElementById('changeTheme');
const mobileIcon = document.getElementById('mobileIcon');
const closeMobileIcon = document.getElementById('closeMobileNavIcon');

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

  changeHeaderBg(checkbox);
  changeMainBg(checkbox);
  changeTextColor(checkbox);
  changeHeaderLogoColor(checkbox);
  changeMobileIconColor(checkbox);
  changeMobileCloseBtn(checkbox);
});

function changeHeaderBg(el) {
  el.checked
    ? document.body.style.setProperty('--header-bg', '#333333')
    : document.body.style.setProperty('--header-bg', '#ffffff');
}

function changeMainBg(el) {
  el.checked
    ? document.body.style.setProperty('--main-bg', '#4f4f4f')
    : document.body.style.setProperty('--main-bg', '#fbfbfb');
}

function changeTextColor(el) {
  if (el.checked) {
    document.body.style.setProperty('--text-color', '#fefefe');
    document.body.style.setProperty('--text-subColor', '#f2f2f2');
  } else {
    document.body.style.setProperty('--text-color', '#333333');
    document.body.style.setProperty('--text-subColor', '#4f4f4f');
  }
}

function changeHeaderLogoColor(el) {
  const logoPaths = document.querySelectorAll('#headerLogo path');

  [...logoPaths].forEach((path) => {
    el.checked ? (path.style.fill = '#ffffff') : (path.style.fill = '#333333');
  });
}

function changeMobileIconColor(el) {
  const iconLines = document.querySelectorAll('#mobileNavSvg line');

  [...iconLines].forEach((line) => {
    el.checked ? (line.style.stroke = '#ffffff') : (line.style.stroke = '#333333');
  });
}

function changeMobileCloseBtn(el) {
  const closeIcon = document.querySelector('#closeMobileNavIcon svg');

  el.checked ? (closeIcon.style.fill = '#ffffff') : (closeIcon.style.fill = '#333333');
}
