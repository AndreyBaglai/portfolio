const filters = document.querySelector('.filters');
const currentImg = document.querySelector('.editor > img');

const fullscreenBtn = document.querySelector('.fullscreen');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

filters.addEventListener('input', (e) => {
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
