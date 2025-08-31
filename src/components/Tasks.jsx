import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"
import Button from "./Button";  

function Tasks ({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate()

    //definindo title e desc das tasks como SearchParams após o clique
    function onSeeDetailsClick(task) {
        const query = new URLSearchParams() 
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
    <ul className="space-y-4 p-6 bg-slate-200 shadow">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">

                <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex  
                        items-center gap-2
                        ${task.isCompleted && 'line-through'
                    }`}
                    >
                    {task.isCompleted && <CheckIcon />}
                    {task.title}


                </button>

                <Button 
                    onClick = {() => onSeeDetailsClick(task) }
                    className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon />
                </Button>

                <Button
                    onClick={() => onDeleteTaskClick(task.id)} 
                >
                    <TrashIcon />
                </Button>
            
            </li>
        ))}
    </ul>
    )
    //As tasks são exportadas do App.jsx como props
    //As funções exportadas do App.jsx são recebidas como props
}

export default Tasks;