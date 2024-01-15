import { z } from 'zod'

const TodoSchema = z.object({
    id: z.string().uuid(),
    task: z.string().min(4, { message: 'task length must equal or greater than 4 chars'}),
    done: z.boolean()
})
type Todo = z.infer<typeof TodoSchema>;

export default Todo;