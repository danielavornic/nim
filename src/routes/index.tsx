import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import HomePage from "../pages/home/home";
import PartnersPage from "@/pages/partners/partners";

const languages = ["en", "ro", "ru"];

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
        throw new Error("Invalid language");
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
      }
    ]
  }
]);
