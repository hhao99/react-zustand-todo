import './App.css'
import TodoList from '@/components/todo/TodoList'
import AddTodo from '@/components/todo/AddTodo'

function App() {

  return (
    <>
      <h1 className='text-3xl text-indie-600'>
        Todo Example
      </h1>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
