import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navtour from './Navtour';
import Cardcarousel from './Cardcarousel';
import Tcard from './Tcard';
import ImageBackground from './ImageBackground';
import Whatshappening from './Whatshappening';
import Tourpackage from './Tourpackage';
import Planyourtrip from './Planyourtrip';
import PhotoGallery from './PhotoGallery';
import Connect from './Connect';
import FooterSection from './FooterSection';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navtour />
    <Cardcarousel />
    <Tcard />
    <ImageBackground />
    <Whatshappening />
    <Tourpackage />
    <Planyourtrip />
    <PhotoGallery />
    <Connect />
    <FooterSection />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
