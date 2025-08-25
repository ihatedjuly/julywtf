window.addEventListener('DOMContentLoaded', () => {
  const enterDiv = document.getElementById('first');
  const card = document.querySelector('.card');
  const audio = document.getElementById('bg-audio');

  enterDiv.addEventListener('click', () => {
    enterDiv.classList.add('fade-out');
    audio.play();

    setTimeout(() => {
      enterDiv.style.display = 'none';
      card.classList.add('visible');
    }, 600);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const volumeControl = document.getElementById('volume-control');
  const volumeIcon = document.getElementById('volume-icon');
  const volumeSlider = document.getElementById('volume-slider');
  const audio = document.getElementById('bg-audio');

  const savedVolume = localStorage.getItem('volume');
  if (savedVolume !== null) {
    volumeSlider.value = savedVolume;
    audio.volume = savedVolume;
  } else {
    audio.volume = volumeSlider.value;
  }

  const updateIcon = (volume) => {
    if (volume == 0) {
      volumeIcon.classList.remove('fa-volume', 'fa-volume-low');
      volumeIcon.classList.add('fa-volume-xmark');
    } else {
      volumeIcon.classList.remove('fa-volume-low', 'fa-volume-xmark');
      volumeIcon.classList.add('fa-volume');
    }
  };

  updateIcon(audio.volume);

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    audio.volume = volume;
    updateIcon(volume);
    localStorage.setItem('volume', volume);
  });
});
