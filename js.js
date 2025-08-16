//falar as variaveis
const addButton = document.getElementById('Add-B');
const RemoveButton = document.getElementById('Rem-B');
const taskInput = document.getElementById('task-input');
const listaContainer= document.querySelector('.lista-tarefas');
const tarefa = document.querySelector('tarefa');
let contador = 0;
//
addButton.addEventListener('click', function() {
    contador++;
    atualizarContador();
    const textoTarefa = taskInput.value;
    const novaTarefa = document.createElement("li");
    const lista = document.querySelector('.lista-tarefas ul');
    lista.appendChild(novaTarefa);
    taskInput.value = '';//apaga o placehoder anterior

    const textoSpan = document.createElement("span");//cria o texto da tarefa
    textoSpan.textContent = textoTarefa;//coloca o texto
    lista.appendChild(textoSpan);

    const botaoconcluir = document.createElement("button");
    botaoconcluir.textContent = "V";
    lista.appendChild(botaoconcluir);

    const botaoexcluir = document.createElement("button");
    botaoexcluir.textContent = "X";
    lista.appendChild(botaoexcluir);

            //quando clicar no botao de excluir
    botaoexcluir.addEventListener('click', function(){
            textoSpan.remove();
            botaoexcluir.remove();
            botaoconcluir.remove();
            novaTarefa.remove();
            contador--;
            atualizarContador();
    });

    //botaoconcluir
    botaoconcluir.addEventListener('click', function(){
        textoSpan.classList.add("concluido");
         // Aguarda 3 segundos (3000 milissegundos) e remove tudo
    setTimeout(function () {
        textoSpan.remove();
            botaoexcluir.remove();
            botaoconcluir.remove();
            novaTarefa.remove();
            contador--;
            atualizarContador();
        }, 1200);
    });
    function atualizarContador() {
        document.getElementById("contador").textContent = contador;
      };
});


