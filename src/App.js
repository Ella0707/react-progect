import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from "./asetss/img/image1.jpg";
import img2 from "./asetss/img/image2.jpg";
import img3 from "./asetss/img/image3.jpg";
import img4 from "./asetss/img/image4.jpg";
import img5 from "./asetss/img/image5.jpg";
import img6 from "./asetss/img/image6.jpg";


function App() {
  return (
    <div className="App">
      <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" />
      <Headliner title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS"/>
      <Headliner title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS"/>
      <Headliner title="Mother who left her baby" thumbnail={img4} label="ABC NEWS"/>
      <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS"/>
      <Headliner title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS"/>
    </div>
  );
}

export default App;
