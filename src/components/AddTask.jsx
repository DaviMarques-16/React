import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
   
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  console.log({title, description});

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa."
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value = {title}
        onChange = {(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa."
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value = {description}
        onChange = {(event) => setDescription(event.target.value)}
      />

      <button onClick={() => {
        //Verifica se pelo menos um dos campos está vazio
        //trim() remove blank spaces
        if(!title.trim() || !description.trim()) {
          return alert('Por favor, preencha todos os campos!')
        } 

        onAddTaskSubmit(title, description)
        setTitle('') //Limpa o input
        setDescription('')
      }}
      className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar</button>
    </div>
  );
  //O valor do state é o valor do input!
  //onChange: atualiza o state com o valor do input
  //ao clicar no adc, chama a função onAddTaskSubmit
  //ela monta a nova tarefa e adiciona na lista de tarefas
}

export default AddTask;
