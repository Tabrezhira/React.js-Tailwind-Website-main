
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import News from './components/News';
import Products from './components/Products';
import Services from './components/Services';
import Myfooter from './components/Myfooter';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <News/>
      <Myfooter/>
    </>

  )
}

export default App

