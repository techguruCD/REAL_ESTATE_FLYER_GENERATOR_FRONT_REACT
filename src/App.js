// import logo from './logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import Home from './Home';

function App() {
  
  return (
    <div className='min-h-screen min-w-screen bg-[#111022] flex flex-col items-center'>
      <Header />
      <Home />
      <Footer />
    </div >
  );
}

export default App;
