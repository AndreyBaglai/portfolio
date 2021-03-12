const filtersContainer = document.querySelector('.filters');
let currentImg = '';
const editor = document.querySelector('.editor');

const fullscreenBtn = document.querySelector('.fullscreen');
const buttons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.btn-reset');
const nextPictureBtn = document.querySelector('.btn-next');
const loadPictureBtn = document.getElementById('btnInput');

const MAX_CONT_IMAGES = 19;
const timesOfDay = setTimesOfDay();
let imageIndex = 0;
const imageUrl =
  'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
];

window.addEventListener('load', () => {
  let src = `${imageUrl}${timesOfDay}/${images[imageIndex]}`;
  viewImage(src);
});

loadPictureBtn.addEventListener('change', (e) => {
  const btn = e.target.parentElement;
  setActiveBtn(btn);

  try {
    const file = loadPictureBtn.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      console.log(reader);
      img.src = reader.result;
      img.alt = 'photo';
      editor.removeChild(editor.lastChild);
      editor.appendChild(img);
      currentImg = img;
    };
    reader.readAsDataURL(file);
  } catch (err) {
    if (err instanceof TypeError) {
      return;
    }
  }
});

nextPictureBtn.addEventListener('click', (e) => {
  const btn = e.target;
  setActiveBtn(btn);

  imageIndex++;
  if (imageIndex === MAX_CONT_IMAGES) imageIndex = 0;
  let src = `${imageUrl}${timesOfDay}/${images[imageIndex]}`;
  viewImage(src);
});

resetBtn.addEventListener('click', (e) => {
  const btn = e.target;
  filtersContainer.querySelectorAll('input').forEach((filter) => {
    resetFilter(filter);
  });
  setActiveBtn(btn);
});

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

filtersContainer.addEventListener('input', (e) => {
  const filter = e.target;

  if (filter.matches('input')) {
    const output = filter.nextElementSibling;
    const filterName = filter.name;
    const filterValue = filter.value;
    const sizing = filter.dataset.sizing;

    output.value = filterValue;
    setFilter(filterName, filterValue, sizing);
  }
});

function setFilter(name, val, sizing) {
  document.documentElement.style.setProperty(`--${name}`, val + sizing);
}

function setActiveBtn(btn) {
  if (btn.classList.contains('btn-active')) {
    return;
  }

  buttons.forEach((btn) => {
    if (btn.classList.contains('btn-active')) {
      btn.classList.remove('btn-active');
    }
  });

  btn.classList.add('btn-active');
}

function resetFilter(filter) {
  const { name } = filter;

  if (name === 'saturate') {
    document.documentElement.style.setProperty(`--${name}`, 100 + filter.dataset.sizing);
    filter.value = 100;
    filter.nextElementSibling.value = 100;
  } else {
    document.documentElement.style.setProperty(`--${name}`, 0 + filter.dataset.sizing);
    filter.value = 0;
    filter.nextElementSibling.value = 0;
  }
}

function setTimesOfDay() {
  const hour = new Date(Date.now()).getHours();

  if (hour > 0 && hour < 6) {
    return 'night';
  } else if (hour >= 6 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'day';
  } else if (hour >= 18 && hour < 24) {
    return 'evening';
  }
}

function viewImage(src) {
  const img = new Image();
  img.src = src;
  img.alt = 'photo';
  img.onload = () => {
    editor.removeChild(editor.lastChild);
    editor.appendChild(img);
    currentImg = img;
  };
}
