import Todo from '@/models/todo'

import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export interface AppState {
    todos: Todo[]
    addTodo: (task: string) => void
    //removeTask: ( id: string) => void
    //toggleState: ( id: string) => void
}

const useStore = create<AppState>(
    (set) => ({
        todos: [],
        addTodo: (task) => {
            set( (state) => ({
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        task,
                        done: false
                    } as Todo,
                ]
            }))
        },
    })
);

export default useStore;