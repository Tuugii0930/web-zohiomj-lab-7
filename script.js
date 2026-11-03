(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const flip = document.getElementById('flip');
  const flipBtn = document.getElementById('flip-btn');

  // Dark mode toggle (custom properties) + хадгалалт
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  const applyTheme = () => {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    themeBtn.setAttribute('aria-pressed', dark);
    themeBtn.textContent = dark ? 'Light горим' : 'Dark горим';
  };
  applyTheme();
  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    applyTheme();
  });

  // Flip товч (keyboard-д хүртээмжтэй)
  flipBtn.addEventListener('click', () => {
    const on = flip.classList.toggle('flip-card--flipped');
    flipBtn.setAttribute('aria-pressed', on);
  });
})();
