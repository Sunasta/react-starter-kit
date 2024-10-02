import GlobalContexts from '@/context/GlobalContext';
import { router } from '@/routers';
import { Fallback } from '@/utils/RouterErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import '@/assets/css/base/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContexts>
        <RouterProvider router={router} fallbackElement={<Fallback />} />
      </GlobalContexts>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
