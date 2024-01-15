import Todo from '@/models/todo'
import useStore  from '@/store'

// shadcn ui
import { Button } from '@/components/ui/button'
import {
    TableRow,
    TableCell,
}
from '@/components/ui/table'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const RemoveAlertDialog = ({todo}:{todo: Todo})=> {

    const removeTodo = useStore( (state) => state.removeTodo )

    const onRemove = (todo: Todo)=> {
        if(todo.done) {
            removeTodo(todo.id)
        }
        else {
            toast("Please confirm to complete the task before remove it.", {
                action: {
                    label: 'close',
                    onClick: ()=> console.log('try to remove task: ',todo.task)
                }
            })
        }
    }
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='destructive'>-</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you want to Remove this Task?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                        You will permanently remove this task, please confirm all the related task was done.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>
                            <Button onClick={ ()=> onRemove(todo)}>Confirm</Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
const TodoItem = ({todo}: { todo: Todo})=> {
    const toggleState = useStore( (state) => state.toggleState )

    return (
        <TableRow>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.task}</TableCell>
            <TableCell>
                <div onClick={ ()=> toggleState(todo.id)}>
                    <Switch id='todo-status' checked={todo.done} />
                </div>
            </TableCell>
            <TableCell>
               <RemoveAlertDialog todo={todo} />
            </TableCell>
           
        </TableRow>
    )
}

export default TodoItem;