const exampleVideos = document.querySelectorAll('.example-video video');

for (const player of exampleVideos) {
  player.addEventListener('play', () => {
    for (const other of exampleVideos) {
      if (other !== player && !other.paused) other.pause();
    }
  });

  const showError = () => {
    player.closest('figure').querySelector('.video-error').textContent =
      'Не удалось загрузить видео. Откройте оригинал по ссылке выше.';
  };

  player.addEventListener('error', showError, { once: true });
  if (player.error) showError();
}
