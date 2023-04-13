import './App.css';
import Service from './components/Service/Service';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-gradient-to-r from-bg1 via-bg3 to-bg2 overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
}

export default App;
