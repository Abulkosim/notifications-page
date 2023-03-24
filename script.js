let counter = document.querySelector('.counter');
let toRead = Array.from(document.querySelectorAll('.to-read'));

// counter.textContent = toRead.length;

console.log(toRead)
for (let i = 0; i < toRead.length; i++) {

  toRead[i].addEventListener('click', function() {
    toRead[i].classList.remove('to-read');
    toRead.splice(i, 1);
    counter.textContent = toRead.length;
  })
}


// toRead.forEach(item => item.addEventListener('click', function() {
//   item.classList.remove('to-read');
// }))


