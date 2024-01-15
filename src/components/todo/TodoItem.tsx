import Todo from '@/models/todo'
import useStore  from '@/store'

const TodoItem = ({todo}: { todo: Todo})=> {
    const removeTask = useStore( (state) => state.removeTask )
    const toggleState = useStore( (state) => state.toggleState )
    return (
        <div>
            <span className="text-slate-600">{todo.task}</span>
            <span>
                <button>-</button>
                <button>?</button>
            </span>
        </div>
    )
}

export default TodoItem;