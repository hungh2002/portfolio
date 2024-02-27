import { createBrowserRouter } from 'react-router-dom';

import App from '../page/App';
import ErrorPage from '../page/error-page';
import Admin from '../page/admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
