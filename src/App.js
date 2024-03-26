import './App.css';
import HallOfFame from './Component/HallOfFame';
import { Head } from './Component/header';
import Profitcast from './Component/Profitcast';
import VoiceOfVictory from './Component/VoiceOfVictroyCpy'

import Enquiry from './Component/Enquiry'
import Footer from './Component/Footer'
import { Plan } from './Component/whyGlobal/planData';
import TruimphGallery from './Component/TruimphGallery'
import {Navbar} from './Component/navbar'
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Head/>
      <Profitcast/>
      <VoiceOfVictory/>
      {/* <HallOfFame/> */}
      {/* <WhoWeAre/> */}
      <TruimphGallery/>
      <Plan/>
       <Enquiry/>
       <Footer/>
    </div>
  );
}

export default App;
