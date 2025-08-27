import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { v4 } from 'uuid';

//Estado - State
function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar React',
    description: 'Tornar-se proficiente em React',
    isCompleted: false
  }, {
    id: 2,
    title: 'Estudar Node.js',
    description: 'Aprender a construir APIs com Node.js', 
    isCompleted: false
  }, {
    id: 3,
    title: 'Estudar TypeScript',
    description: 'Adicionar tipagem ao JavaScript com TypeScript',
    isCompleted: false
  }, ])


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

          <h1 className='text-3xl text-slate-100 font-bold text-center'>
            Gerenciador de Tarefas
          </h1>

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
