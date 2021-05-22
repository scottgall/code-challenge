const form = document.querySelector('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

const logSubmit = (event) => {
  event.preventDefault();
  let input = document.querySelector('input');
  let string = input.value;
  log.innerHTML = `Missing letters: "${getMissingLetters(string)}"`;
  input.value = '';
};

const getMissingLetters = (string) => {
  let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
  let stringSet = new Set(string.toLowerCase());
  stringSet.forEach((char) => {
    alphabetSet.delete(char);
  });
  return [...alphabetSet].join('');
};


