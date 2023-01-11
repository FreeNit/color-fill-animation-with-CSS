const btnPlayAnimation = document.querySelector('.reset-animation');
const containerColorImage = document.querySelector('.color-image');

btnPlayAnimation.addEventListener('click', () => {
  containerColorImage.classList.remove('mask-animation');
  setTimeout(() => containerColorImage.classList.add('mask-animation'), 100);
});
