import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Paths from './config/Paths';

function App() {
  return (
         <BrowserRouter>
       <Route render={props => (
        <>
          <Header {...props}/>
          <Paths/>
          <Footer/>
        </>
       )}/>
      </BrowserRouter>
  );
}

export default App;
