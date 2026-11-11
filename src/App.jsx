import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import TaskDetailPage from './pages/TaskDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
