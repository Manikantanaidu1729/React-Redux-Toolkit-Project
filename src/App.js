import React from "react";
import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";


function App() {

  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="product/:productId" exact element={<ProductDetail />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
