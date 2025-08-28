import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { v4 } from 'uuid';
import { useEffect } from 'react';
import Title from './components/Title'

//Estado - State
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  
//Lista fazia sendo o primeiro acesso


  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  //A função será executada quando tasks for alterado.

//   useEffect(() => {
//     const fetchTasks = async () => {

//   //Chamar a API
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
//         method: 'GET'
//       });

//       //Pegar os daddos que ela retorna
//       const data = await response.json() //converter response pra json

//       //Armazenar/Persistir os dados no state
//       setTasks(data)

//     }

//     fetchTasks()
// // SE QUISER, chamar a api e pegar os dados.
//   }, [])


  //Quando o segundo parâmetro é uma lista vazia,
  //A função só é executada uma vez: no acesso


//Esta função atualiza o estado das tarefas
function onTaskClick(taskId)  {
  const newTasks = tasks.map(task => {
    //Preciso atualizar essa tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted
      }
    }

    //Não preciso atualizar essa tarefa
    return task
  });

  setTasks(newTasks);

}

//Esta função deleta a tarefa
function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks);
}

//Esta função adiciona uma nova tarefa
function onAddTaskSubmit (title, description) {
  const newTask = {
    id: v4(), //Gera um ID único para a tarefa
    title: title,
    description: description,
    isCompleted: false
  };

  setTasks([...tasks, newTask]) //Adiciona a nova tarefa no array de tarefas
}

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>

        <div className='w-[500px] space-y-4'>

        
          <Title>
            Gerenciador de Tarefas
          </Title>
          

          <AddTask
            onAddTaskSubmit={onAddTaskSubmit}
          />

          <Tasks
           tasks={tasks}
           onTaskClick={onTaskClick} 
           onDeleteTaskClick={onDeleteTaskClick}
          />

        </div>
    </div>
  )
  //O componente Task renderiza as props tasks, onTaskClick e onDeleteTaskClick
  //Essas, recebem os valores do estado e das funções que atualizam o estado


}

export default App;
