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

import logoImg from './asetss/img/logo.png';
import Item from './components/item/Item';
import ItemTitle from './components/item-title/ItemTitle';






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


      <aside className='sidebar'>

        <div className='wrap'> 

        <a className='logo'>
          <img className="logoImg" src={logoImg} alt="" />
        </a>

        <div className='list'>

          <div className='itemWrap'>
          <svg className='svg' width="24" height="23" viewBox="0 0 24 23" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.0534L12 0L0 12.0534H2.31282V23H10.7891V15.7023H13.2109V23H21.6872V12.0534H24ZM8.36731 13.2697V20.5674H4.73461V10.7277L12 3.42993L19.2654 10.7277V20.5674H15.6327V13.2697H13.2109H10.7891H8.36731Z" fill="#503E9D" />
            </svg>
            <Item itemTitle='Home' />
          </div>

          <div className='itemWrap'>
          <svg className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H10.6667V13.3333H0V0ZM24 0H13.3333V8H24V0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM21.3333 5.33333V2.66667H16V5.33333H21.3333ZM21.3333 13.3333V21.3333H16V13.3333H21.3333ZM8 21.3333V18.6667H2.66667V21.3333H8ZM24 10.6667H13.3333V24H24V10.6667ZM0 16H10.6667V24H0V16Z" fill="#878787" />
            </svg>
            <Item itemTitle='Explore' />
          </div>

          <div className='itemWrap'>
          <svg className='svg' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57143 0H15.4286C16.8429 0 18 1.18667 18 2.66667V24L9 20L0 24V2.66667C0 1.19391 1.15127 0 2.57143 0ZM9 17.0933L15.4286 20V2.66667H2.57143V20L9 17.0933Z" fill="#878787" />
            </svg>
            <Item itemTitle='Saved' />
          </div>

          <div className='itemWrap'>
          <svg className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 8V5.33333H18.6667V8H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 18.6667V16H14.6667V18.6667H5.33333Z" fill="#878787" />
            </svg>
            <Item itemTitle='Subscriptions' />
          </div>

          <div className='itemWrap itemWrap--count'>
          <svg className='svg' width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 0H21.6C22.9255 0 24 1.06332 24 2.375V16.625C24 17.9367 22.9255 19 21.6 19H2.4C1.068 19 0 17.9312 0 16.625V2.375C0 1.05687 1.068 0 2.4 0ZM12 8.3125L21.6 2.375H2.4L12 8.3125ZM21.6 5.18937V16.625H2.4V5.18937L12 11.115L21.6 5.18937Z" fill="#A3A3A4" />
            </svg>
            
            <Item itemTitle='Messages' />
            <a className='could-link'>
              <span className='could-value'>2</span>
            </a>
          </div>

          <div className='itemWrap'>
          <svg className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53323 24C9.22489 24 8.96588 23.784 8.91654 23.496L8.46019 20.316C7.68316 20.016 7.01713 19.608 6.37577 19.128L3.30464 20.34C3.0333 20.436 2.70029 20.34 2.55228 20.076L0.0855125 15.924C-0.0748274 15.66 -0.00082439 15.336 0.233519 15.156L2.83596 13.164L2.74962 12L2.83596 10.8L0.233519 8.844C-0.00082439 8.664 -0.0748274 8.34 0.0855125 8.076L2.55228 3.924C2.70029 3.66 3.0333 3.552 3.30464 3.66L6.37577 4.86C7.01713 4.392 7.68316 3.984 8.46019 3.684L8.91654 0.504C8.96588 0.216 9.22489 0 9.53323 0H14.4668C14.7751 0 15.0341 0.216 15.0835 0.504L15.5398 3.684C16.3168 3.984 16.9829 4.392 17.6242 4.86L20.6954 3.66C20.9667 3.552 21.2997 3.66 21.4477 3.924L23.9145 8.076C24.0748 8.34 24.0008 8.664 23.7665 8.844L21.164 10.8L21.2504 12L21.164 13.2L23.7665 15.156C24.0008 15.336 24.0748 15.66 23.9145 15.924L21.4477 20.076C21.2997 20.34 20.9667 20.448 20.6954 20.34L17.6242 19.14C16.9829 19.608 16.3168 20.016 15.5398 20.316L15.0835 23.496C15.0341 23.784 14.7751 24 14.4668 24H9.53323ZM16.9335 12C16.9335 9.34903 14.7247 7.2 12 7.2C9.27528 7.2 7.06646 9.34903 7.06646 12C7.06646 14.651 9.27528 16.8 12 16.8C14.7247 16.8 16.9335 14.651 16.9335 12ZM9.53323 12C9.53323 10.6745 10.6376 9.6 12 9.6C13.3624 9.6 14.4668 10.6745 14.4668 12C14.4668 13.3255 13.3624 14.4 12 14.4C10.6376 14.4 9.53323 13.3255 9.53323 12ZM10.6186 5.532L11.075 2.4H12.925L13.3814 5.544C14.8615 5.832 16.1688 6.6 17.1185 7.668L20.091 6.42L21.016 7.98L18.4136 9.84C18.9069 11.244 18.9069 12.768 18.4136 14.172L21.0284 16.032L20.1033 17.592L17.1062 16.344C16.1565 17.4 14.8615 18.168 13.3937 18.468L12.9374 21.6H11.0626L10.6063 18.456C9.13855 18.168 7.8435 17.4 6.89379 16.344L3.89667 17.592L2.97163 16.032L5.5864 14.16C5.09305 12.768 5.09305 11.244 5.5864 9.84L2.98396 7.98L3.909 6.42L6.88146 7.668C7.83116 6.6 9.13855 5.832 10.6186 5.532Z" fill="#878787" />
            </svg>
            <Item itemTitle='Settings' />
            
          </div>

        </div>
        </div>
      </aside>

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
