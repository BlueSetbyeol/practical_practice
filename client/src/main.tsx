import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import TestOfApi from "./pages/TestOfApi/TestOfApi";
import TestOfCors from "./pages/TestOfCors/TestOfCors";
import TestOfMap from "./pages/TestOfMap/TestOfMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/map",
        element: <TestOfMap />,
      },
      {
        path: "/api",
        element: <TestOfApi />,
      },
      {
        path: "/heros",
        element: <TestOfCors />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
