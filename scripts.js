const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursor-ring");

if (cursor && cursorRing) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };

  animateRing();
}

const navContactButton = document.getElementById("nav-contact-btn");

if (navContactButton) {
  navContactButton.addEventListener("click", () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  });
}

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((element) => revealObserver.observe(element));

const taglineText = document.getElementById("tagline-text");

if (taglineText) {
  const words = taglineText.innerHTML.split(/(\s+)/);
  let rebuiltMarkup = "";

  words.forEach((word) => {
    if (/\s+/.test(word)) {
      rebuiltMarkup += word;
    } else if (word.startsWith("<em>")) {
      rebuiltMarkup += word;
    } else if (word) {
      rebuiltMarkup += `<span class="word">${word}</span>`;
    }
  });

  taglineText.innerHTML = rebuiltMarkup;

  const wordElements = taglineText.querySelectorAll(".word");
  const taglineObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        let index = 0;
        const intervalId = setInterval(() => {
          if (index < wordElements.length) {
            wordElements[index].classList.add("lit");
            index += 1;
          } else {
            clearInterval(intervalId);
          }
        }, 60);

        taglineObserver.unobserve(taglineText);
      }
    },
    { threshold: 0.3 },
  );

  taglineObserver.observe(taglineText);
}

document.querySelectorAll(".bento-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`;
    const y = `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`;

    card.style.setProperty("--mx", x);
    card.style.setProperty("--my", y);
  });
});
