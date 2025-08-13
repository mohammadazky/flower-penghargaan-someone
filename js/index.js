const title = document.querySelector('.title');
const text = `Hallo Amelia Puspita Sari Sang Pemilik Bunga Sejagat Raya`.split('');

// Animasi teks
title.style.display = 'flex';
title.style.flexWrap = 'wrap';
title.style.justifyContent = 'center';
title.style.gap = '0.5rem';

text.forEach(char => {
  if (char !== ' ') {
    title.innerHTML += `<span>${char}</span>`;
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`;
  }
});

document.querySelectorAll('.title span').forEach(el => {
  el.style.animationDelay = `${Math.random() * 3}s`;
});

// Musik & transisi
let audio;

function playMusic() {
  if (!audio) {
    audio = new Audio("audio/lagu.mp3"); // path sesuai folder audio
    audio.loop = true;
    audio.volume = 0.6;
    audio.currentTime = sessionStorage.getItem("musicTime") || 0;
    audio.play();

    audio.addEventListener("timeupdate", () => {
      sessionStorage.setItem("musicTime", audio.currentTime);
    });
  }
}

function startTransition(e) {
  e.preventDefault();
  playMusic();

  document.body.style.transition = "opacity 1.5s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "flower.html";
  }, 1500);
}

document.querySelector(".btn").addEventListener("click", startTransition);
