const changeThemeBtn = document.getElementById('changeTheme');

changeThemeBtn.addEventListener('change', (e) => {
  const checkbox = e.currentTarget;

  changeHeaderBg(checkbox);
  changeMainBg(checkbox);
  changeTextColor(checkbox);
  changeHeaderLogoColor(checkbox);
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
