//falar as variaveis
const addButton = document.getElementById('Add-B');
const RemoveButton = document.getElementById('Rem-B');
const taskInput = document.getElementById('task-input');
const listaContainer= document.querySelector('.lista-tarefas');

let contador = 0;
//
addButton.addEventListener('click', function() {
    const textoTarefa = taskInput.value;
    if (textoTarefa.trim() === "") return;
    contador++;
    atualizarContador();
    const novaTarefa = document.createElement("li");
    novaTarefa.classList.add('tarefa'); 
    const lista = document.querySelector('.lista-tarefas ul');
    lista.appendChild(novaTarefa);
    taskInput.value = '';//apaga o placehoder anterior

    const textoSpan = document.createElement("span");//cria o texto da tarefa
    textoSpan.textContent = textoTarefa;//coloca o texto
    novaTarefa.appendChild(textoSpan);

    const botaoconcluir = document.createElement("button");
    botaoconcluir.innerHTML = '<i class="fas fa-check"></i>'; // ícone de check
    botaoconcluir.classList.add("icone-botao");
    novaTarefa.appendChild(botaoconcluir);

    const botaoexcluir = document.createElement("button");
    botaoexcluir.innerHTML = '<i class="fas fa-trash"></i>'; // ícone de lixeira
    botaoexcluir.classList.add("icone-botao");
    
    novaTarefa.appendChild(botaoexcluir);

            //quando clicar no botao de excluir
   botaoexcluir.addEventListener('click', function(){            
            novaTarefa.remove();
            contador--;
            atualizarContador();
    }); 

    //botaoconcluir
    botaoconcluir.addEventListener('click', function(){
        textoSpan.classList.add("concluido");
         // Aguarda 3 segundos (3000 milissegundos) e remove tudo
    setTimeout(function () {
            textoSpan.style.opacity = "0.5";
            novaTarefa.style.transition = "opacity 1.2s";
            novaTarefa.style.opacity = "0.5";
            novaTarefa.remove();
            contador--;
            atualizarContador();
        }, 1200);
    });
    function atualizarContador() {
        document.getElementById("contador").textContent = contador;
      };
});


