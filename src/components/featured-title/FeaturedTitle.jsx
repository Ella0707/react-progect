import s from './FeaturedTitle.module.css';





function FeaturedTitle (props) {
    return (
        <h3 className={s.featuredTitle}>{props.featuredTitle}</h3>
    );
}

export default FeaturedTitle;