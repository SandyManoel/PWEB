const inputTexto = document.getElementById('inputTexto');
const maiusculasCheckbox = document.getElementById('maiusculas');
const minusculasCheckbox = document.getElementById('minusculas');

maiusculasCheckbox.addEventListener('change', () => {
    if (maiusculasCheckbox.checked) {
        inputTexto.value = inputTexto.value.toUpperCase();
        minusculasCheckbox.checked = false;
    }
});

minusculasCheckbox.addEventListener('change', () => {
    if (minusculasCheckbox.checked) {
        inputTexto.value = inputTexto.value.toLowerCase();
        maiusculasCheckbox.checked = false;
    }
});