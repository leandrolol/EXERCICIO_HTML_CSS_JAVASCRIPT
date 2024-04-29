const form = document.getElementById('meuFormulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    const containerMensagemSucesso = document.querySelector('.sucesso');
    const containerMensagemErro = document.querySelector('.erro');

    if (campoA > campoB){
        containerMensagemSucesso.innerHTML = 'Parabéns!! O valor é válido';
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        form.campoA.style.border = '';
        form.campoB.style.border = '';
        form.reset();
    } else {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.style.display = 'block';
        form.campoA.style.border = '1px solid red';
        form.campoB.style.border = '1px solid red';
        containerMensagemErro.innerHTML = 'Campo A não pode ser menor que Campo B';
        form.reset();
    }
});
