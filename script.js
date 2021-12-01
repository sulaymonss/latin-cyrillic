let elForm = document.querySelector('#form');
let elLatin = document.querySelector('#latin');
let elCyrillic = document.querySelector('#cyrillic');

elForm.addEventListener('input', (e) =>{
    
    let word = elLatin.value;
    e.preventDefault();

    latinValue = elLatin.value.trim();
    cyrillicValue = elCyrillic.value.trim();

    let splitted = word.split('');
    let changedLetters = splitted.map((letter) =>{
        return letters[letter] || letter
    })
    
    let result = changedLetters.join('')
    elCyrillic.textContent = result;
});