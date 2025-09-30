import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import SearchByCat from './components/search_by_cat/SearchByCat';
import LatestTractors from './components/latest_tractors/LatestTractors';
import Footer from './components/footer/Footer';

import Login from "./components/login_register/Login";
import Register from './components/login_register/Register';

import ProductList from './components/product_list/ProductList';


function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Home/>
   <SearchByCat/>
   <LatestTractors/>
   <Footer/>
   {/* <Login/> */}
   {/* <Register/> */}
   {/* <ProductList/> */}
 </>
  );
}

export default App;
