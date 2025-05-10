document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[data-sound]').forEach(link => {
    link.addEventListener('click', function () {
      const soundId = this.getAttribute('data-sound');
      const sound = document.getElementById(soundId);
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    });
  });
});


