'use strict';
let placeholder1 = 100;
let placeholder2 = 200;
const sectionEl = document.querySelectorAll('section');
sectionEl.forEach((sec, i) => {
  const htmlEl = `<h2>First Counter</h2>
        <h3></h3>
        <button class="dec${i + 1}">DECREASE</button>
        <button class=" res res${i + 1}">RESET</button>
        <button class="inc${i + 1}">INCREASE</button>
      </section>`;
  sec.insertAdjacentHTML('afterbegin', htmlEl);
});

const h3El = document.querySelectorAll('h3');

h3El[0].textContent = placeholder1;
h3El[1].textContent = placeholder2;
// console.log(h3El[0].classList.contain('fff'));

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const elSeclected = e.target;
    elSeclected.classList.contains('inc1') && (placeholder1 += 1);
    elSeclected.classList.contains('inc2') && (placeholder2 += 1);

    elSeclected.classList.contains('res1') && (placeholder1 = 0);
    elSeclected.classList.contains('res2') && (placeholder2 = 0);

    elSeclected.classList.contains('dec1') && (placeholder1 -= 1);
    elSeclected.classList.contains('dec2') && (placeholder2 -= 1);

    h3El[0].textContent = placeholder1;
    h3El[1].textContent = placeholder2;
  });
});
