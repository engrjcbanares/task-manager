import { Link } from 'react-router'
import StatusBadge from './StatusBadge'

function TaskCard({ task }) {
  return (
    <li>
      <Link
        to={`/tasks/${task.id}`}
        className="flex h-full flex-col items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-400 hover:shadow-sm"
      >
        <StatusBadge completed={task.completed} />
        <span className="font-medium">{task.todo}</span>
      </Link>
    </li>
  )
}

export default TaskCard
