import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

// Lazy loading or direct imports for other pages
import Employers from './pages/Employers';
import Candidates from './pages/Candidates';
import Services from './pages/Services';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import HireTalent from './pages/HireTalent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'employers', element: <Employers /> },
      { path: 'candidates', element: <Candidates /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'hire-talent', element: <HireTalent /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
