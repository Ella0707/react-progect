import s from './ChannelTitle.module.css';





function ChannelTitle (props) {
    return (
       
            <h3 className={s.channelTitle}>{props.channelTitle}</h3> 
       
    );
}

export default ChannelTitle;