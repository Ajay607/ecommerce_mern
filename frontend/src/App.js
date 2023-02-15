import './App.css';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/layout/home/Home";
import ProductDetails from './component/productDetails/ProductDetails';
// import ProductDetails from './component/ProductDetails/productDetails';
// import ProductDetails from './component/productDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path='/product/:id' element={<productDetails />} /> */}
          {/* <Route path='/product/:id' element={<ProductDetails />} /> */}
          <Route path='/product/:id' element={<ProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
