import s from './FeaturedBlock.module.css';
import Time from './../time/Time';
import Label from './../label/Label';
import FeaturedTitle from '../featured-title/FeaturedTitle';




function FeaturedBlock (props) {
    return (
        <div className={s.featuredBlock}>
            <img className={s.featuredImg} src={props.featuredImg} alt="" />

            <div className={s.wrapper}>
                    <FeaturedTitle featuredTitle={props.featuredTitle} />
                <div className={s.wrap}>
                    <Label label={props.label} />
                    <Time />
                </div>
            </div>
        </div>

    );
}

export default FeaturedBlock;