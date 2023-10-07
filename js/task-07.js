const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');


const initialFontSize = parseInt(getComputedStyle(text).fontSize);


fontSizeControl.value = initialFontSize;

fontSizeControl.addEventListener('input', () => {
  
  text.style.fontSize = fontSizeControl.value + 'px';
});
