import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

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

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>

        <div className='w-[500px]'>

          <h1 className='text-3xl text-slate-100 font-bold text-center'>
            Gerenciador de Tarefas
          </h1>

          <AddTask />
          <Tasks tasks={tasks} onTaskClick={onTaskClick} />

        </div>
    </div>
  )
}

export default App;
