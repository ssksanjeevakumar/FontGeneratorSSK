const textInput = document.getElementById('textInput');
const fontContainer = document.getElementById('fontContainer');

const fonts = [
  'cursive', 'fantasy', 'monospace', 'serif', 'sans-serif',
  'Courier New', 'Lucida Console', 'Comic Sans MS', 'Impact', 'Georgia',
  'Brush Script MT', 'Arial Black', 'Tahoma', 'Verdana', 'Trebuchet MS',
  'Papyrus', 'Gill Sans', 'Palatino Linotype', 'Segoe UI', 'Times New Roman'
];

function generateFonts(text) {
  fontContainer.innerHTML = '';
  fonts.forEach(font => {
    const div = document.createElement('div');
    div.className = 'font-style';
    div.innerHTML = `
      <div style="font-family: '${font}'; font-size: 20px;">${text}</div>
      <button class="copy-btn" onclick="copyText('${text}')">Copy</button>
    `;
    fontContainer.appendChild(div);
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied: ' + text);
  });
}

textInput.addEventListener('input', (e) => {
  generateFonts(e.target.value);
});

generateFonts('SSK');  // default text
