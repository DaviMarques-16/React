import { ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";

function Tasks ({tasks, onTaskClick, onDeleteTaskClick}) {
    return (
    <ul className="space-y-4 p-6 bg-slate-200 shadow">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">

                <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-left text-white p-2 rounded-md w-full 
                        ${task.isCompleted && 'line-through'
                    }`}
                    >
                    {task.title}


                </button>

                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon />
                </button>

                <button
                    onClick={() => onDeleteTaskClick(task.id)} 
                    className="bg-slate-400 p-2 rounded-md text-white">
                    <TrashIcon />
                </button>
            
            </li>
        ))}
    </ul>
    )
    //As tasks são exportadas do App.jsx como props
    //As funções exportadas do App.jsx são recebidas como props
}

export default Tasks;