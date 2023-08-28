import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App font-sans text-gray-900  min-h-screen p-0 m-0">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
