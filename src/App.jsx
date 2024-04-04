// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import News from './News';
import 'bootstrap/dist/css/bootstrap.css';
import Success from './Success';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={<News />}
      />
      <Route
        path='/success'
        element={<Success />}
      />
    </>
  )
);

function App() {
  // const [dismiss, set] = useState(0)

  return <RouterProvider router={router} />;
}

export default App;
