import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Layanan = lazy(() => import("./pages/Layanan"));
const Humas = lazy(() => import("./pages/Layanan/Humas"));
const Kontak = lazy(() => import("./pages/Kontak"));
const Daftar = lazy(() => import("./pages/Daftar"));
const Masuk = lazy(() => import("./pages/Masuk"));

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
    path: "/kontak",
    component: Kontak,
  },
  {
    path: "/daftar",
    component: Daftar,
  },
  {
    path: "/masuk",
    component: Masuk,
  },
];

export default routes;
