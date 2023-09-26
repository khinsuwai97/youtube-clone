import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '../RootLayout';
import HomePage from './HomePage';
import VideoPage from './VideoPage';
import ChannelPage from './ChannelPage';
import SearchPage from './SearchPage';

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: '/video/:id', element: <VideoPage /> },
        { path: '/channel/:id', element: <ChannelPage /> },
        { path: '/search/:searchTerm', element: <SearchPage /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Pages;
