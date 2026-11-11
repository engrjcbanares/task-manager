import { Link } from 'react-router'
import { useTodos } from '../hooks/useTodos'
import StatCard from '../components/StatCard'
import StatusMessage from '../components/StatusMessage'
import TaskList from '../components/TaskList'

const NEXT_UP_COUNT = 3

function TaskSummary() {
  const { data: tasks, isPending, isError, error } = useTodos()

  if (isPending) return <StatusMessage title="Loading your summary..." />

  if (isError) {
    return (
      <StatusMessage role="alert" title="Could not load your summary" message={error.message} />
    )
  }

  const openTasks = tasks.filter((task) => !task.completed)

  return (
    <>
      <dl className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Total tasks" value={tasks.length} />
        <StatCard label="Open" value={openTasks.length} />
        <StatCard label="Done" value={tasks.length - openTasks.length} />
      </dl>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Next up</h2>
        {openTasks.length === 0 ? (
          <StatusMessage title="All caught up" message="You have no open tasks." />
        ) : (
          <TaskList tasks={openTasks.slice(0, NEXT_UP_COUNT)} />
        )}
      </section>
    </>
  )
}

function HomePage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Your tasks at a glance</h1>
          <p className="mt-1 text-slate-600">
            See what is open, what is done and what to pick up next.
          </p>
        </div>
        <Link
          to="/tasks"
          className="rounded-md bg-slate-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-700"
        >
          View all tasks
        </Link>
      </header>

      <TaskSummary />
    </div>
  )
}

export default HomePage
