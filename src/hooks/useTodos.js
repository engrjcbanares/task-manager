import { useQuery } from '@tanstack/react-query'
import { fetchTodo, fetchTodos } from '../api/todos'

export function useTodos() {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
}

export function useTodo(taskId) {
  return useQuery({
    queryKey: ['todos', taskId],
    queryFn: () => fetchTodo(taskId),
  })
}
