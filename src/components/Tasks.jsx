import { ChevronRight, ChevronRightIcon } from "lucide-react";

function Tasks (props) { //Passar valores para outra parte do código
    return (
    <ul className="space-y-4 p-6 bg-slate-200 shadow">
        {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">

                <button 
                    onClick={() => props.onTaskClick(task.id)}
                    className={`bg-slate-400 text-left text-white p-2 rounded-md w-full 
                        ${task.isCompleted && 'line-through'
                    }`}
                    >
                    {task.title}


                </button>

                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon />
                </button>
            
            </li>
        ))}
    </ul>
    )
}

export default Tasks;