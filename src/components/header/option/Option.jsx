import s from './Option.module.css';
import  optionArrowTop from './../../../asetss/img/arrow.png';
import  optionArrowDown from './../../../asetss/img/arrow.png';
import OptionTitle from '../option-title/OptionTitle';




function Option (props) {
    return (
        <div className={s.option}>
            <img className={s.optionImg} src={props.optionImg} alt="" />
            
            <OptionTitle optionTitle={props.optionTitle}/>

            <div className={s.optionArrowWrap}>
            <a className={s.optionLinkTop} href="">
                <img className={s.optionArrowTop} src={optionArrowTop} alt="" />
            </a>
            <a className={s.optionLinkDown} href="">
                <img className={s.optionArrowDown} src={optionArrowDown} alt="" />
            </a>
            </div>
        </div>
    );
}

export default Option;