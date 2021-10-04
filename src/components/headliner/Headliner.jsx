import s from './Headliner.module.css';
import likeIcon from "./../../asetss/img/like.svg";
import dislikeIcon from "./../../asetss/img/disLike.svg";
import Time from '../time/Time';
import Label from '../label/Label';
import ArticleHeader from '../article-header/ArticleHeader';


function Headliner(props) {
  return (
    <div className={s.headliner}>
    <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
    <div className={s.info}>
        <ArticleHeader title={props.title}/>
        <div className={s.rating}>
            <div className={s.like}>
                <img className={s.likeIcon} src={likeIcon} alt="" />
                <span className={s.text}>10.8k</span>
            </div>
            <div className={s.dislike}>
                <img className={s.dislikeIcon} src={dislikeIcon} alt="" />
                <span className={s.text}>1.4k</span>
            </div>
        </div>
        <div className={s.wrapper}>
            <Label label={props.label}/>
            <Time />
        </div>




    </div>
    </div>
  );
}

export default Headliner;