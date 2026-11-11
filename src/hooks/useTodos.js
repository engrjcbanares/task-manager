import { useQuery } from '@tanstack/react-query'
import { fetchTodo, fetchTodos } from '../api/todos'

export function useTodos() {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
}

export function useTodo(id) {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => fetchTodo(id),
  })
}
