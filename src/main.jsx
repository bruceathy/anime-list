import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MyList from "./pages/MyList.jsx";
import AnimeReview from "./pages/AnimeReviews.jsx";
import AnimeRecs from "./pages/AnimeRecs.jsx";
import MangaRecs from "./pages/MangaRecs.jsx";
import MangaReview from "./pages/MangaReviews.jsx";

const router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  {
    path: "/",
    element: <App />,
  },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/mylist", element: <MyList /> },
  { path: "/a-review", element: <AnimeReview /> },
  { path: "/m-review", element: <MangaReview /> },
  { path: "/a-recs", element: <AnimeRecs /> },
  { path: "/m-recs", element: <MangaRecs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
