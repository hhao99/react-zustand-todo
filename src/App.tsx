import './App.css'
import TodoList from '@/components/todo/TodoList'
import AddTodo from '@/components/todo/AddTodo'

// shadcn ui
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'
function App() {

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>React Zustand Todo Demo</CardTitle>
          <CardDescription>Demo Application with zustand statement and Shadcn UI.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex justify-end'> <AddTodo /></div>
         
          <TodoList />
        </CardContent>
        <CardFooter>
          <h5>Created by Eric Hao @ Jan. 2024</h5>
        </CardFooter>
        <Toaster />
      </Card>
    </>
  )
}

export default App
