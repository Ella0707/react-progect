import './Headliner.css';
import likeIcon from "./../../asetss/img/like.svg";
import dislikeIcon from "./../../asetss/img/disLike.svg";
import clockIcon from "./../../asetss/img/clock.svg";

function Headliner(props) {
  return (
    <div className="headliner">
    <img className="thumbnail-img" src={props.thumbnail} alt="" />
    <div className="info">
        <h1 className="title">{props.title}</h1>
        <div className="rating">
            <div className="like">
                <img className="like-icon" src={likeIcon} alt="" />
                <span className="text">10.8k</span>
            </div>
            <div className="dislike">
                <img className="dislike-icon" src={dislikeIcon} alt="" />
                <span className="text">1.4k</span>
            </div>
        </div>
        <div className="wrapper">
            <span className="label">{props.label}</span>
            <div className="time">
                <img className="time-icon"src={clockIcon} alt="" />
                <span className="time-text">2:00 pm</span>
            </div>
        </div>




    </div>
    </div>
  );
}

export default Headliner;