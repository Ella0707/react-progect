import s from './Search.module.css';



function Search (props) {
    return (
        <input className={s.search} type="text" search={props.search}/>
    );
}

export default Search;