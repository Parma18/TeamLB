const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault
})


function logar() {
    const username = document.getElementById('firstname').value;
    const dateInput = document.getElementById('date');
    
   
    dateInput.setAttribute('lang', 'pt-BR');

    
    if (username !== 'Davi') {
        alert('Usuário ou senha incorretos');
        return false;
    }

    const selectedDate = dateInput.value;
    const targetDate = '2006-02-15'; 
    
    if (selectedDate !== targetDate) {
        alert('Usuário ou senha incorretos');
        return false;
    }

    
    alert('Login realizado com sucesso!');  
    window.location.href = 'inicial.html';
}