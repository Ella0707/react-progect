import s from './OptionTitle.module.css';




function OptionTitle (props) {
    return (
        <h3 className={s.optionTitle}>{props.optionTitle}</h3>
    );
}

export default OptionTitle;