import { Link, useParams } from 'react-router'
import { useTodo } from '../hooks/useTodos'
import StatusBadge from '../components/StatusBadge'
import StatusMessage from '../components/StatusMessage'

function BackLink() {
  return (
    <Link to="/tasks" className="inline-block text-sm font-medium text-slate-600 hover:text-slate-900">
      &larr; Back to tasks
    </Link>
  )
}

function TaskDetailPage() {
  const { id } = useParams()
  const { data: task, isPending, isError, error } = useTodo(id)

  if (isPending) return <StatusMessage title="Loading task..." />

  if (isError) {
    return (
      <StatusMessage role="alert" title="Could not load this task" message={error.message}>
        <BackLink />
      </StatusMessage>
    )
  }

  return (
    <article className="space-y-6">
      <BackLink />
      <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-8">
        <StatusBadge completed={task.completed} />
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">{task.todo}</h1>
        <dl className="mt-6 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-600">Task number</dt>
            <dd className="font-medium">{task.id}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-600">Assigned to</dt>
            <dd className="font-medium">User {task.userId}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default TaskDetailPage
