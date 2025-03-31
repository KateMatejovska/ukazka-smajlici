/*
document.querySelector('#smiley1').addEventListener('click', () => {
    const btn = document.querySelector('#smiley1');
    btn.classList.add('btn-smiley--selected');
  });
  document.querySelector('#smiley2').addEventListener('click', () => {
    const btn = document.querySelector('#smiley2');
    btn.classList.add('btn-smiley--selected');
  });
  document.querySelector('#smiley3').addEventListener('click', () => {
    const btn = document.querySelector('#smiley3');
    btn.classList.add('btn-smiley--selected');
  });
  document.querySelector('#smiley4').addEventListener('click', () => {
    const btn = document.querySelector('#smiley4');
    btn.classList.add('btn-smiley--selected');
  });
  document.querySelector('#smiley5').addEventListener('click', () => {
    const btn = document.querySelector('#smiley5');
    btn.classList.add('btn-smiley--selected');
  });
    */

//toto je lepší zápis toho nahoře

/*
const selectSmiley = (evt) => {
  evt.target.classList.add('btn-smiley--selected');
};
 
document.querySelector('#smiley1').addEventListener('click', selectSmiley);
document.querySelector('#smiley2').addEventListener('click', selectSmiley);
document.querySelector('#smiley3').addEventListener('click', selectSmiley);
document.querySelector('#smiley4').addEventListener('click', selectSmiley);
document.querySelector('#smiley5').addEventListener('click', selectSmiley);
*/

const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

document.querySelectorAll(".btn-smiley").forEach((btn) => {
  btn.addEventListener("click", selectSmiley)
})

const jmena = ["Michal", "Marie", "Dan", "Jan", "Martin", "Klara"]
const email = []

// Varianta c. 1
jmena.forEach((hodnota) => {
  email.push(`${hodnota}@czechitas.cz`)
})

console.log(email)

// Varianta c. 2
const email2 = jmena.map((hodnota) => {
  return `${hodnota}@czechitas.cz`
})

const email3 = jmena.map(hodnota => `${hodnota}@czechitas.cz`)

console.log(email3)