let nombreInput = document.getElementById('input-name');
let adicionarBtn = document.getElementById('adicionar-btn');
let listaNombres = document.getElementById('lista-nombres');

adicionarBtn.addEventListener('click', function()){
    let nombre = nombreInput.value;
    if(nombre !== ''){
        let li = document.createElement('li');
        listaNombre.appendChild(li);
        nombreInput.value = '';
    } else{
        alert ('Escriba un nombre')
    }
}