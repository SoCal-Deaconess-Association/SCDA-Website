import { Route, Routes } from 'react-router-dom';

// Error
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';

// Components
import { Header } from '../components/Header';

// Pages
import { HistoryPage } from '../pages/History.page';

export const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Header />
            <Routes>
                <Route path="/*" element={<HistoryPage />} />
            </Routes>
        </ErrorBoundary>
    )
}
