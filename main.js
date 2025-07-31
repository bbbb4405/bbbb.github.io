const listItems = document.querySelectorAll('nav ul li');
const indicator = document.querySelector('.indicator');

function updateIndicator(element) {
  const left = element.offsetLeft;
  indicator.style.left = left + 'px';
  indicator.style.width = element.offsetWidth + 'px';
}

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('li.active').classList.remove('active');
    item.classList.add('active');
    updateIndicator(item);
  });

  // Initial update
  if (item.classList.contains('active')) {
    updateIndicator(item);
  }
});
