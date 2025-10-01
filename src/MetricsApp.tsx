import { Navigation } from './components/Navigation';
import { MetricsPage } from './components/MetricsPage';
import { Footer } from './components/Footer';

export default function MetricsApp() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <MetricsPage />
      </main>
      <Footer />
    </div>
  );
}