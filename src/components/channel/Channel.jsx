import ChannelTitle from '../channel-title/ChannelTitle';
import s from './Channel.module.css';





function Channel (props) {
    return (
        <div className={s.channel}>
            <div className={s.channelWrap}>
            <img className={s.channelImg} src={props.channelImg} alt="" />
            <ChannelTitle channelTitle={props.channelTitle}/>
            </div>
        </div>
    );
}

export default Channel;