import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import HomePage from "../pages/home/home";
import PartnersPage from "@/pages/partners/partners";
import RulesPage from "@/pages/rules/rules";
import NotFoundPage from "@/pages/not-found/not-found";

const languages = ["ro", "en", "ru"];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ro" replace />
  },
  {
    path: "/:lang",
    element: <RootLayout />,
    loader: ({ params }) => {
      if (!languages.includes(params.lang || "")) {
        return redirect(`/ro/${params.lang}`);
      }
      return null;
    },
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "partners",
        element: <PartnersPage />
      },
      {
        path: "rules",
        element: <RulesPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);
