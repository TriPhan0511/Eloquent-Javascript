const para = document.querySelector('.coloredText');

console.log(para.style.color === '');
// -> true

console.log(window.getComputedStyle(para).getPropertyValue('color'));
// -> rgb(255, 127, 80)

para.style.color = 'red';
console.log(window.getComputedStyle(para).getPropertyValue('color'));
// -> rgb(255, 0, 0)
console.log(window.getComputedStyle(para).color);
// -> rgb(255, 0, 0)

