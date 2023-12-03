// import logo from './logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './Header'
import Footer from './Footer';
import Home from './Home';

function App() {

  return (
    <div className='min-h-screen min-w-screen bg-[#111022] flex flex-col items-center'>
      <Header />
      <Home />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div >
  );
}

export default App;
