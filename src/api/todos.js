const BASE_URL = 'https://dummyjson.com/todos'

export async function fetchTodos() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Could not load tasks. Please try again.')
  const data = await res.json()
  return data.todos
}

export async function fetchTodo(taskId) {
  const res = await fetch(`${BASE_URL}/${encodeURIComponent(taskId)}`)
  if (res.status === 404) throw new Error(`Task "${taskId}" does not exist.`)
  if (!res.ok) throw new Error('Could not load this task. Please try again.')
  return res.json()
}
