import { Route, Routes } from 'react-router-dom';

// Error
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';

// Components
import { Header } from '../components/Header';

// Pages
import { HistoryPage } from '../pages/History.page';
import { GreetingsPage } from '../pages/Greetings.page';
import { AnthemPage } from '../pages/Anthem.page';

export const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Header />
            <main>
                <Routes>
                    <Route path="/*" element={<HistoryPage />} />
                    <Route path="/greetings" element={<GreetingsPage />} />
                    <Route path="/anthem" element={<AnthemPage />} />
                </Routes>
            </main>
        </ErrorBoundary>
    )
}
