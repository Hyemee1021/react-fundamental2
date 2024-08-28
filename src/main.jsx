import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Video } from "./pages/Video.jsx";
import { PlayList } from "./pages/PlayList.jsx";
import { VideoProvider } from "./contexts/VideoContext.jsx";
import { Login } from "./pages/Login.jsx";
import { Login2 } from "./pages/Login2.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Video />,
  },
  {
    path: "/playlist",
    element: <PlayList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login2",
    element: <Login2 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <RouterProvider router={router} />
    </VideoProvider>
  </StrictMode>
);
