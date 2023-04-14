import './App.css';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route, Routes,createBrowserRouter } from 'react-router-dom';
import Home from "./component/layout/home/Home";
import ProductDetails from './component/productDetails/ProductDetails';
import Products from './component/productDetails/Products';
import Search from './component/productDetails/Search';
// import ProductDetails from './component/ProductDetails/productDetails';
// import ProductDetails from './component/productDetails/ProductDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/search",
      element: <Search />,
      // loader: rootLoader,
      
    },
  ]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/product/:id' element={<productDetails />} /> */}
          {/* <Route path='/product/:id' element={<ProductDetails />} /> */}
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:keyword' element={<Products />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
