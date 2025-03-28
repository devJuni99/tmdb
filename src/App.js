import { Outlet } from 'react-router';
import './App.css';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryclient = new QueryClient();

function App() {
  return (
    <div>
      <Header />
      <QueryClientProvider client={queryclient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
