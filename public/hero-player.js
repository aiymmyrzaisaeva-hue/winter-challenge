(() => {
  const player = document.querySelector('.hero-player');
  if (!player) return;

  const video = player.querySelector('video');
  const controls = player.querySelector('.hero-controls');
  const play = controls.querySelector('[data-play]');
  const sound = controls.querySelector('[data-sound]');
  const fullscreen = controls.querySelector('[data-fullscreen]');
  const seek = controls.querySelector('.hero-seek');
  const status = player.querySelector('.hero-video-status');
  const canFullscreen = document.fullscreenEnabled && player.requestFullscreen;
  const canNativeFullscreen = typeof video.webkitEnterFullscreen === 'function';

  function showStatus(message) {
    status.textContent = message;
    status.hidden = !message;
  }

  function syncPlayback() {
    const playing = !video.paused && !video.ended;
    player.toggleAttribute('data-playing', playing);
    play.setAttribute('aria-label', playing ? 'Пауза' : 'Воспроизвести');
  }

  function syncSound() {
    const muted = video.muted || video.volume === 0;
    player.toggleAttribute('data-muted', muted);
    sound.setAttribute('aria-label', muted ? 'Включить звук' : 'Выключить звук');
  }

  function syncProgress() {
    const ready = Number.isFinite(video.duration) && video.duration > 0;
    seek.disabled = !ready;
    seek.value = ready ? Math.round(video.currentTime / video.duration * 1000) : 0;
    seek.style.setProperty('--played', `${seek.valueAsNumber / 10}%`);
    seek.setAttribute('aria-valuetext', `${Math.round(seek.valueAsNumber / 10)}%`);
  }

  function syncFullscreen() {
    fullscreen.setAttribute('aria-label', document.fullscreenElement === player
      ? 'Выйти из полноэкранного режима' : 'На весь экран');
  }

  async function togglePlayback() {
    if (!video.paused && !video.ended) {
      video.pause();
      return;
    }

    showStatus('');
    try {
      await video.play();
    } catch (error) {
      if (error.name !== 'AbortError') showStatus('Не удалось воспроизвести видео.');
    }
  }

  play.addEventListener('click', togglePlayback);
  video.addEventListener('click', togglePlayback);
  sound.addEventListener('click', () => {
    if (video.volume === 0) {
      video.volume = 1;
      video.muted = false;
    } else {
      video.muted = !video.muted;
    }
  });
  fullscreen.addEventListener('click', async () => {
    showStatus('');
    try {
      if (document.fullscreenElement === player) await document.exitFullscreen();
      else if (canFullscreen) await player.requestFullscreen();
      else if (canNativeFullscreen) video.webkitEnterFullscreen();
    } catch {
      showStatus('Не удалось открыть видео на весь экран.');
    }
  });
  seek.addEventListener('input', () => {
    if (seek.disabled) return;
    video.currentTime = seek.valueAsNumber / 1000 * video.duration;
    syncProgress();
  });

  for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, syncPlayback);
  for (const event of ['loadedmetadata', 'durationchange', 'timeupdate', 'seeked']) {
    video.addEventListener(event, syncProgress);
  }
  video.addEventListener('volumechange', syncSound);
  video.addEventListener('error', () => showStatus('Не удалось загрузить видео.'));
  document.addEventListener('fullscreenchange', syncFullscreen);

  fullscreen.hidden = !canFullscreen && !canNativeFullscreen;
  syncPlayback();
  syncSound();
  syncProgress();
  video.controls = false;
  controls.hidden = false;
})();
