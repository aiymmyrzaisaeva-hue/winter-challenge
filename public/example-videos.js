const exampleVideos = document.querySelectorAll('.example-video video');

exampleVideos.forEach((player) => {
  player.addEventListener('play', () => {
    exampleVideos.forEach((other) => {
      if (other !== player && !other.paused) other.pause();
    });
  });

  const showError = () => {
    player.hidden = true;
    player.nextElementSibling.textContent =
      'Не удалось загрузить видео. Открой оригинал в Instagram по ссылке ниже.';
  };

  player.addEventListener('error', showError, { once: true });
  if (player.error) showError();
});
