function StatusBadge({ completed }) {
  const colors = completed
    ? 'bg-green-100 text-green-800'
    : 'bg-amber-100 text-amber-800'

  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colors}`}>
      {completed ? 'Done' : 'Open'}
    </span>
  )
}

export default StatusBadge
