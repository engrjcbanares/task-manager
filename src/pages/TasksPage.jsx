import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'
import StatusMessage from '../components/StatusMessage'
import TaskFilters from '../components/TaskFilters'
import TaskList from '../components/TaskList'

const buttonClass =
  'rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700'

function filterTasks(tasks, search, status) {
  const term = search.trim().toLowerCase()
  return tasks.filter((task) => {
    const matchesStatus =
      status === 'all' || task.completed === (status === 'done')
    return matchesStatus && task.todo.toLowerCase().includes(term)
  })
}

function TasksPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const { data: tasks, isPending, isError, error, refetch } = useTodos()

  function clearFilters() {
    setSearch('')
    setStatus('all')
  }

  if (isPending) return <StatusMessage title="Loading tasks..." />

  if (isError) {
    return (
      <StatusMessage role="alert" title="Something went wrong" message={error.message}>
        <button type="button" onClick={() => refetch()} className={buttonClass}>
          Try again
        </button>
      </StatusMessage>
    )
  }

  if (tasks.length === 0) {
    return <StatusMessage title="No tasks yet" message="There is nothing to do right now." />
  }

  const visibleTasks = filterTasks(tasks, search, status)

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold sm:text-3xl">Tasks</h1>
        <p className="mt-1 text-slate-600">
          Showing {visibleTasks.length} of {tasks.length}
        </p>
      </header>

      <TaskFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {visibleTasks.length === 0 ? (
        <StatusMessage
          title="No tasks match"
          message="Try a different search or status."
        >
          <button type="button" onClick={clearFilters} className={buttonClass}>
            Clear filters
          </button>
        </StatusMessage>
      ) : (
        <TaskList tasks={visibleTasks} />
      )}
    </section>
  )
}

export default TasksPage
