import Todo from '@/models/todo'
import useStore from '@/store'
import TodoItem from '@/components/todo/TodoItem'

// shadcn ui
import {
    Table,
    TableCaption,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
}
from '@/components/ui/table'
const TodoList = ()=> {
    const todos: Todo[] = useStore( (state) => state.todos)
    return (
        <Table>
            <TableCaption>Todo List</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>TASK</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos && todos.map( (todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </TableBody>
            
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3} className='text-blue-600'>
                        Total task(s) to be done:
                    </TableCell>
                    <TableCell className='text-lg'>{todos.length}</TableCell>
                </TableRow>
                
            </TableFooter>
            
        </Table>
    )
}

export default TodoList;