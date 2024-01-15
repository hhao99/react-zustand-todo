import Todo from '@/models/todo'
import useStore from '@/store'
import { useState } from 'react'

// shadcn ui 
//shadcn ui
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from '@/components/ui/sheet'



import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const AddTodo = ()=> {
    const [task,setTask] = useState('test ')
    const [counter,setCounter] = useState(0)
    const addTodo = useStore( state => state.addTodo )
    const onAdd = (e)=> {
        if(e.key == 'Enter') {
            e.preventDefault()
            if( task.length >= 4) {
                addTodo(task)
                setCounter( pre => pre+1)
                setTask('test ' + counter)

            }
        }
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline'>+</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add new Task</SheetTitle>
                    <SheetDescription>
                        Add new todo task to the todolist...
                    </SheetDescription>
                </SheetHeader>
                <div className='grid gap-4 py-4'>
                    <form>
                        <Label htmlFor='task'>Add New Todo:</Label>
                        <Input name='task' id='task'
                            onChange={e=> setTask(e.target.value)}
                            value={task}
                            onKeyDown={e=> onAdd(e)} />
                    </form>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button>Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        
    )
}

export default AddTodo