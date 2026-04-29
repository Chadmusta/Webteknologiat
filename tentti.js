const checkboxes = document.querySelectorAll('.tayte');
const options = document.querySelectorAll('.pizza');
const hintaElem = document.getElementById('hinta');
let kokonaishinta = 0;

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        const arvo = parseFloat(cb.value);
        if (cb.checked) {
            kokonaishinta += arvo;
        } else {
            kokonaishinta -= arvo;
        }
        hintaElem.textContent = kokonaishinta.toFixed(2);
    });
});

options.forEach(options => {
    options.addEventListener('change', () => {
        const arvo = parseFloat(cb.value);
        if (cb.checked) {
            kokonaishinta += arvo;
        } else {
            kokonaishinta -= arvo;
        }
        hintaElem.textContent = kokonaishinta.toFixed(2);
    });
});