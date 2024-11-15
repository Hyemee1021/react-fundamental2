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
import { PostList } from "./pages/PostList.jsx";
import { PostProvider } from "./contexts/PostContext.jsx";
import { Counter } from "./pages/Counter.jsx";

import TaskManager from "./pages/TaskManager.jsx";
import { Forms } from "./pages/Forms.jsx";
import { Blog } from "./pages/Blog.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import LoginFirebase from "./pages/LoginFirebase.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
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
    path: "/login3",
    element: <LoginFirebase />,
  },
  {
    path: "/todolist",
    element: <TodoList />,
  },
  {
    path: "/post-list",
    element: <PostList />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todolist2",
    element: <TaskManager />,
  },
  {
    path: "/multiforms",
    element: <Forms />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/posts/:id",
    element: <BlogPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <ListProvider>
        <PostProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </PostProvider>
      </ListProvider>
    </VideoProvider>
  </StrictMode>
);
