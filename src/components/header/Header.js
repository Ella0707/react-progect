import s from'./Header.module.css';

import Option from './option/Option';
import optionImg1 from "./../../asetss/img/option-img1.png";
import optionImg2 from "./../../asetss/img/option-img2.png";
import optionImg3 from "./../../asetss/img/option-img3.png";
import Search from './../search/Search';
import btnImg from './../../asetss/img/Buttons.png';
import userImg from './../../asetss/img/user.png';



const data = {
  optionTitle: "San Francisco, California"
}
const data2 = {
  optionTitle2: "Analysis"
}
const data3 = {
  optionTitle3: "Monthly"
}



function Header(props) {
  return (
      <header className={s.header}>

        <div className={s.headerWrap}>

          <div className={s.headerOption}>
            <Option optionTitle={data.optionTitle} optionImg={optionImg1} />
            <Option optionTitle={data2.optionTitle2} optionImg={optionImg2} />
            <Option optionTitle={data3.optionTitle3} optionImg={optionImg3} />
          </div>

          <Search />

          <a className={s.btnLink}>
            <img className={s.btnImg} src={btnImg} alt="" />
          </a>
          <a className={s.userLink}>
            <img className={s.userImg} src={userImg} alt="" />
          </a>
        </div>
      </header>
   
  );
}

export default Header;
