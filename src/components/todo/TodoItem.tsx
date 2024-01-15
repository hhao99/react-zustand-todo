import Todo from '@/models/todo'
import useStore  from '@/store'

// shadcn ui
import { Button } from '@/components/ui/button'
import {
    TableRow,
    TableCell,
}
from '@/components/ui/table'

const TodoItem = ({todo}: { todo: Todo})=> {
    const removeTodo = useStore( (state) => state.removeTodo )
    const toggleState = useStore( (state) => state.toggleState )
    return (
        <TableRow>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.task}</TableCell>
            <TableCell>
                <Button variant={'outline'} onClick={ ()=> toggleState(todo.id)}>{todo.done?'OK':'Open'}</Button>
            </TableCell>
            <TableCell>
                <Button variant={'destructive'} 
                    onClick={ ()=> removeTodo(todo.id) }
                >
                    -
                </Button>
            </TableCell>
           
        </TableRow>
    )
}

export default TodoItem;