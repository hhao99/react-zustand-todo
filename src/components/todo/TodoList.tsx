import Todo from '@/models/todo'
import useStore from '@/store'
import TodoItem from '@/components/todo/TodoItem'
const TodoList = ()=> {
    const todos: Todo[] = useStore( (state) => state.todos)
    return (
        <div>
            <h3>Todo List</h3>
            <div>
                {todos && todos.map( (todo) => <TodoItem key={todo.id} todo={todo} />)}
            </div>
            <h5>There are {todos.length} task(s) to be done.</h5>
            
        </div>
    )
}

export default TodoList;