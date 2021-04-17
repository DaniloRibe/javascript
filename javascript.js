document.getElementById('tarefa').onkeydown = (e) => { if (e.code === "Enter") addTarefa(document.getElementById('tarefa')) };
function addTarefa(input) {
    if (!input.value.length) {
        alert('Adicione um texto pf :)');
        return;
    }
    const lista = document.getElementById('lista');
    const novaTarefa = document.createElement('li');
    novaTarefa.onclick = tarefaConcluida;
    novaTarefa.innerHTML = `${input.value} <button class="bRm" onclick="rmTarefa(this)">X</button>`;
    input.value = '';
    lista.appendChild(novaTarefa);
}
function rmTarefa(elemento) {
    elemento.parentElement.remove();
}
function tarefaConcluida(elemento) {
    if (elemento.path[0].style.backgroundColor === "rgb(81, 223, 112)") {
        elemento.path[0].style.backgroundColor = "rgb(78, 185, 205)";
        elemento.path[0].style.color = "white";
    } else {
        elemento.path[0].style.backgroundColor = "rgb(81, 223, 112)";
        elemento.path[0].style.color = "rgba(0, 0, 0, 0.5)";
    }
}