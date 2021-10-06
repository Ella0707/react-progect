import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from "./asetss/img/image1.jpg";
import img2 from "./asetss/img/image2.jpg";
import img3 from "./asetss/img/image3.jpg";
import img4 from "./asetss/img/image4.jpg";
import img5 from "./asetss/img/image5.jpg";
import img6 from "./asetss/img/image6.jpg";
import Option from './components/option/Option';
import optionImg1 from "./asetss/img/option-img1.png";
import optionImg2 from "./asetss/img/option-img2.png";
import optionImg3 from "./asetss/img/option-img3.png";
import Search from './components/search/Search';
import btnImg from './asetss/img/Buttons.png';
import userImg from './asetss/img/user.png';
import Channel from './components/channel/Channel';
import channelImg1 from './asetss/img/channelImg1.png';
import channelImg2 from './asetss/img/channelImg2.png';
import channelImg3 from './asetss/img/channelImg3.png';
import channelImg4 from './asetss/img/channelImg4.png';
import channelImg5 from './asetss/img/channelImg5.png';
import channelImg6 from './asetss/img/channelImg6.png';
import FeaturedBlock from './components/featuredBlock/FeaturedBlock';
import featuredImg1 from './asetss/img/featuredImg1.png';
import featuredImg2 from './asetss/img/featuredImg2.png';
import featuredImg3 from './asetss/img/featuredImg3.png';





function App() {
  return (
    <div className="App">

      {/* HEADER  */}
      <header className='header'>

        <div className='headerWrap'>

          <div className='headerOption'>
            <Option optionTitle="San Francisco, California" optionImg={optionImg1} />
            <Option optionTitle="Analysis" optionImg={optionImg2} />
            <Option optionTitle="Monthly" optionImg={optionImg3} />
          </div>

          <Search />

          <a className='btnLink'>
            <img className="btnImg" src={btnImg} alt="" />
          </a>
          <a className='userLink'>
            <img className="userImg" src={userImg} alt="" />
          </a>
        </div>
      </header>


      <aside className='sidebar'>Aside</aside>





      <main className='main'>

      <section className='channels'>
      <h2 className='block-title'>Explore Channels</h2>
      <div className='channel-content'> 
      <Channel channelTitle='FOX NEWS' channelImg={channelImg1}/>
      <Channel channelTitle='CW6 NEWS' channelImg={channelImg2}/>
      <Channel channelTitle='ABC NEWS' channelImg={channelImg3}/>
      <Channel channelTitle='AL JAZEERA' channelImg={channelImg4}/>
      <Channel channelTitle='BBC NEWS' channelImg={channelImg5}/>
      <Channel channelTitle='CNN NEWS' channelImg={channelImg6}/>
      </div>
      </section>


        <section className='headliners'>
          <h2 className='block-title'>Today’s Headlines</h2>
          <div className='block-content'>
            <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" />
            <Headliner title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS" />
            <Headliner title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS" />
            <Headliner title="Mother who left her baby" thumbnail={img4} label="ABC NEWS" />
            <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS" />
            <Headliner title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS" />
          </div>
        </section>



        <section className='featured'>
        <h2 className='block-title'>Featured News</h2>

        <div className='featured-content'>

          <FeaturedBlock featuredTitle="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS" featuredImg={featuredImg1}/>
          <FeaturedBlock featuredTitle="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS" featuredImg={featuredImg2}/>
          <FeaturedBlock featuredTitle="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS" featuredImg={featuredImg3}/>

        </div>




        </section>
      </main>
    </div>
  );
}

export default App;
