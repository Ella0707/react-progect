import s from './ItemTitle.module.css';





function ItemTitle (props) {
    return (
        <h3 className={s.itemTitle}>{props.itemTitle}</h3>
    );
}

export default ItemTitle;