import Todo from '@/models/todo'
import useStore from '@/store'
import { useState } from 'react'

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
        <div>
            <form>
                Add new Task: <input 
                    type='text' 
                    onChange={e=> setTask(e.target.value)}
                    value={task}
                    onKeyDown={ e=> onAdd(e) }
                    />
            </form>
        </div>
    )
}

export default AddTodo