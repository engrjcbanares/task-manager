const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'open', label: 'Open' },
  { value: 'done', label: 'Done' },
]

function TaskFilters({ search, status, onSearchChange, onStatusChange }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="flex-1">
        <span className="sr-only">Search tasks</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search tasks"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2"
        />
      </label>
      <div role="group" aria-label="Filter by status" className="flex gap-2">
        {STATUS_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={status === option.value}
            onClick={() => onStatusChange(option.value)}
            className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium sm:flex-none ${
              status === option.value
                ? 'border-slate-800 bg-slate-800 text-white'
                : 'border-slate-300 bg-white hover:bg-slate-100'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilters
