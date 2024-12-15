import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">whoops, something happened...</h1>
      <p className="text-accent-foreground">
        an error occurred in the application, below you can find more details:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        back to the{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          dashboard
        </Link>
      </p>
    </div>
  )
}
