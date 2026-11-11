function StatusMessage({ title, message, role = 'status', children }) {
  return (
    <div
      role={role}
      className="rounded-lg border border-slate-200 bg-white px-4 py-10 text-center"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      {message && <p className="mt-2 text-slate-600">{message}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default StatusMessage
