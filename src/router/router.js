import { createBrowserRouter } from 'react-router-dom';

import App from '../page/App';
import ErrorPage from '../page/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
