import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "../Dashboard";
import Inicio from "../Inicio";
import App from "../App";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Inicio />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/app" element={<App />} />
//     </Route>
//   )
// );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <h1>Ruta mal escrita</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);
