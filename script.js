let counter = document.querySelector('.counter');
let toRead = document.querySelectorAll('.to-read');
let markRead = document.querySelector('.mark-read');

markRead.addEventListener('click', () => {
  toRead.forEach(e => {
    e.classList.remove('to-read');
  })
  counter.innerText = '0';
})

toRead.forEach(e => e.addEventListener('click', () => {
  e.classList.remove('to-read');
  if(counter.innerText >= 1) {
    counter.innerText -= 1;
  };
}))