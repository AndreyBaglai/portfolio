const filtersContainer = document.querySelector('.filters');
const currentImg = document.querySelector('.editor > img');

const fullscreenBtn = document.querySelector('.fullscreen');
const buttons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.btn-reset');

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
  currentImg.style.filter = `${name}(${val}${sizing ? sizing : 'px'})`;
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
  currentImg.style.filter = 'none';

  if (filter.name === 'saturate') {
    filter.value = 100;
    filter.nextElementSibling.value = 100;
  } else {
    filter.value = 0;
    filter.nextElementSibling.value = 0;
  }
}
