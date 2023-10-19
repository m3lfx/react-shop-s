import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home';
import ProductDetails from "./Components/Product/ProductDetails";
function App() {

  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
        </Routes>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
