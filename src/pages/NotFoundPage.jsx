import { Link } from 'react-router'
import StatusMessage from '../components/StatusMessage'

function NotFoundPage() {
  return (
    <StatusMessage title="Page not found" message="That address does not match any page.">
      <Link to="/" className="font-medium underline">
        Go to home
      </Link>
    </StatusMessage>
  )
}

export default NotFoundPage
