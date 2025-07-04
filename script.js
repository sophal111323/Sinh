window.addEventListener('load', () => {
  const audio = document.getElementById('bgMusic');

  const tryPlay = () => {
    audio.play().then(() => {
      console.log("✅ Music started by interaction.");
      removeListeners();
    }).catch(err => {
      console.warn("⚠️ Play attempt failed:", err);
    });
  };

  const removeListeners = () => {
    document.removeEventListener('click', tryPlay);
    document.removeEventListener('scroll', tryPlay);
    document.removeEventListener('touchstart', tryPlay);
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => console.log("✅ Autoplay success"))
      .catch(() => {
        document.addEventListener('click', tryPlay);
        document.addEventListener('scroll', tryPlay);
        document.addEventListener('touchstart', tryPlay);
      });
  }
});

// Falling texts
const fallingTexts = [
  "b sl o bbe💞",
  "💞💝",
  "My princess 👰💞",
  "My bbe💝🤩",
  "Pretty girl 🤩",
  "love u so much💝😛",
  "kon na ke sart klang²😍",
  "cute nas o sml bos b🫶🙈",
  "ouy cute klang ha🥹💞",
  "o nham ey sart mes😣❤️",
  "my dream girl😍",
  "My girl💞",
  "My heart 💖🥹",
  "Bbe cute mes 😝💝",
  "Bbe nham ey kur oy sl mes 😝",
  "Awwww pretty girl 💞💞",
  "Ouy cute klag hah 🥹💖",
  "B sl o 🤬💖",
  "Sl o eg klag nass 🤬💕",
  "Kon na ke ng kur oy sl mes 😭💞",
  "Hz lerg cute neak bsd 😙💞",
  "I luv u so much o sml 🤭🤬",
  "Nik o eg klag nas 😭💖",
  "O nham ey sart mes bbe 🥹💝",
  "Sart mes bbe 💞😭",
  "I miss u klag nass 🤬💖",
  "salanh o eg klag hrr nah 🥺💖",
  "My princess 👸👑",
  
];

function createFallingText() {
  const amount = Math.floor(Math.random() * 3) + 2;
  for (let i = 0; i < amount; i++) {
    const text = document.createElement('div');
    text.classList.add('falling-text');
    text.innerText = fallingTexts[Math.floor(Math.random() * fallingTexts.length)];
    text.style.left = Math.random() * 100 + 'vw';
    text.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 7000);
  }
}
setInterval(createFallingText, 1000);

// Falling hearts & petals
const heartIcons = ["💖", "💘", "❤️", "💕"];
const petalIcons = ["🌸", "🌺", "🌷", "💮"];

function createFallingItem(type) {
  const iconList = type === "heart" ? heartIcons : petalIcons;
  const item = document.createElement("div");
  item.classList.add(type === "heart" ? "falling-heart" : "falling-petal");
  item.innerText = iconList[Math.floor(Math.random() * iconList.length)];
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = (3 + Math.random() * 4) + "s";
  item.style.fontSize = (1 + Math.random() * 1.5) + "em";
  document.body.appendChild(item);
  setTimeout(() => item.remove(), 8000);
}

setInterval(() => createFallingItem("heart"), 1500);
setInterval(() => createFallingItem("petal"), 1300);

const fallingImages = [
  "pic1.jpg", // រូបផ្ទ�