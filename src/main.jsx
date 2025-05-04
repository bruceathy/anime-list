import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MyList from "./pages/MyList.jsx";
import AnimeReview from "./pages/AnimeReviews.jsx";
import AnimeRecs from "./pages/AnimeRecs.jsx";
import MangaRecs from "./pages/MangaRecs.jsx";
import MangaReview from "./pages/MangaReviews.jsx";
import "./index.css";
import "./css/mobile.css";

const router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/mylist", element: <MyList /> },
  // each page below has child routes to full page view
  // of series
  { path: "/anime-review", element: <AnimeReview /> },
  { path: "/manga-review", element: <MangaReview /> },
  { path: "/anime-recs", element: <AnimeRecs /> },
  { path: "/manga-recs", element: <MangaRecs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
