import s from './Item.module.css';

import ItemTitle from '../item-title/ItemTitle';




function Item (props) {
    return (
        <div className={s.item}>
                <ItemTitle itemTitle={props.itemTitle}/>
        </div>
    );
}

export default Item;