function changeBackground() {
  const colors = ['#f0f0f0', '#ffd700', '#90ee90', '#add8e6', '#ffcccb'];
  const currentColor = document.body.style.backgroundColor;
  let newColor = currentColor;

  while (newColor === currentColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }

  document.body.style.backgroundColor = newColor;
}
