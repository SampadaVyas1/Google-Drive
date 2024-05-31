import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home/Home";
import FolderPage from "../view/FolderPage/FolderPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/folder/:id",
    element: <FolderPage />,
  },
]);
