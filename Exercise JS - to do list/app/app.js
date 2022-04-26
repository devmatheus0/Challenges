/*console.log("mensagem");

var tarefa1="Ir ao supermercado ";
var tarefa2="Estudar programação ";
var tarefa3="Atualizar o LinkedIn";

console.log("Minhas tarefas são " + tarefa1 + tarefa2 + tarefa3);

const tarefas=[];

tarefas.push(tarefa1,tarefa2,tarefa3);
console.log(tarefas);

var novaTarefa = "Regar plantas"

tarefas.push(novaTarefa)
console.log(tarefas)

function exibirTarefas() {
    for(i=0;i<=tarefas.length-1;i++){
        alert("Minha tarefa é "+tarefas[i]);
    }
}

exibirTarefas()

function adicionarTarefa (){
    var tarefa = "Nova tarefa";
    tarefas.push(tarefa)
    console.log(tarefas)
    exibirTarefas()
}

adicionarTarefa()*/

let tarefas = []

function adicionarTarefa(titulo,descrição) {
     novaTarefa = {
        id:0, 
        titulo:"", 
        descrição:""
    }
    novaTarefa.titulo=titulo
    novaTarefa.descrição=descrição
    tarefas.push(novaTarefa)
}

function exibirTarefas() {
    console.log(tarefas)
    for (i=0;i<=tarefas.length-1;i++){
        novaTarefa.id=novaTarefa.id+1
        alert("Tarefa "+novaTarefa.id +"\nTítulo: " +tarefas[i].titulo + "\nDescrição: " +tarefas[i].descrição)
    }
}

adicionarTarefa("Passear com o cachorro","Levar o cachorro pra passear durante 20min")

adicionarTarefa("Tirar o lixo", "Levar todo o lixo para fora.")

adicionarTarefa("Calibrar o pneu da bicicleta", "Levar a bike até o posto e calibrar o pneu à 32psi")

exibirTarefas()
