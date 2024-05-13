import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import Bar from "../Bar/Bar";
import Footer from "../Footer/Footer";
import { data } from "../data";
import "../index.css";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));
const ContactsPage = lazy(() => import("../ContactsPage/ContactsPage"));
const ProductsPage = lazy(() => import("../ProductsPage/ProductsPage"));

const App = () => {
  return (
    <>
      <Bar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/products" element={<ProductsPage data={data} />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
