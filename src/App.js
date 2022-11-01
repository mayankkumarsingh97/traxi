import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import LatestTractors from './components/latest_tractors/LatestTractors';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Home/>
   <LatestTractors/>
   <Footer/>
   </>
  );
}

export default App;
