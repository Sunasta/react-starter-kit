import GlobalContexts from '@/context/GlobalContext';
import { router } from '@/routers';
import { Fallback } from '@/utils/RouterErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import '@/assets/css/base/App.css';

function App() {
  return (
    <GlobalContexts>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </GlobalContexts>
  );
}

export default App;
