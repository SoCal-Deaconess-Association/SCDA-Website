import { FallbackProps } from 'react-error-boundary';

// Content to display when program errors out.
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
    <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
            Try again
        </button>
    </div>
)