import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((data, index) =>
            data.component ? (
              <Route
                key={index}
                path={data.path}
                element={
                  <Suspense fallback={<div>loading</div>}>
                    <data.component />
                  </Suspense>
                }
              />
            ) : null
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
