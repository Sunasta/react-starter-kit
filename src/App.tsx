import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import GlobalContexts from './context/GlobalContext';
import { Fallback } from './utils/RouterErrorBoundary';
import './assets/css/base/App.css';

function App() {
  return (
    <GlobalContexts>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </GlobalContexts>
  );
}

export default App;
