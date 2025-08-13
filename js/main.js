// ===== MAIN.JS =====
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // ===== Animasi teks =====
    const titles = ('Sang Melati Yang Cantik Dan Imut ').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    // ===== Musik autoplay & loop =====
    const audio = new Audio("audio/lagu.mp3"); // ganti nama sesuai file audio kamu
    audio.loop = true;
    audio.volume = 0.6;
    audio.currentTime = sessionStorage.getItem("musicTime") || 0;
    audio.play();

    // Simpan posisi musik tiap detik
    audio.addEventListener("timeupdate", () => {
      sessionStorage.setItem("musicTime", audio.currentTime);
    });

    clearTimeout(c);
  }, 1000);
};
