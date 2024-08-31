import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Video } from "./pages/Video.jsx";
import { PlayList } from "./pages/PlayList.jsx";
import { VideoProvider } from "./contexts/VideoContext.jsx";
import { Login } from "./pages/Login.jsx";
import { Login2 } from "./pages/Login2.jsx";
import { TodoList } from "./pages/TodoList.jsx";
import { ListProvider } from "./contexts/ListContext.jsx";
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
  {
    path: "/todolist",
    element: <TodoList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <ListProvider>
        <RouterProvider router={router} />
      </ListProvider>
    </VideoProvider>
  </StrictMode>
);
