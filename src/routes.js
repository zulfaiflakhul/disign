import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Layanan = lazy(() => import("./pages/Layanan"));
const Humas = lazy(() => import("./pages/Layanan/Humas"));
const Perpustakaan = lazy(() => import("./pages/Layanan/Perpustakaan"));
const Keamanan = lazy(() => import("./pages/Layanan/Keamanan"));
const Kesehatan = lazy(() => import("./pages/Layanan/Kesehatan"));
const Kopma = lazy(() => import("./pages/Layanan/Kopma"));
const HSC = lazy(() => import("./pages/Layanan/HSC"));
const Kontak = lazy(() => import("./pages/Kontak"));

const routes = [
  // if not found redirect to homepage or another page
  {
    path: "*",
    component: Home, // change this element to 404 page for the example
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/layanan",
    component: Layanan,
  },
  {
    path: "/layanan/humas",
    component: Humas,
  },
  {
    path: "/layanan/perpustakaan",
    component: Perpustakaan,
  },
  {
    path: "/layanan/keamanan",
    component: Keamanan,
  },
  {
    path: "/layanan/kesehatan",
    component: Kesehatan,
  },
  {
    path: "/layanan/kopma",
    component: Kopma,
  },
  {
    path: "/layanan/HSC",
    component: HSC,
  },
  {
    path: "/kontak",
    component: Kontak,
  },
];

export default routes;
