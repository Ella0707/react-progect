import s from './Search.module.css';



function Search(props) {
    return (
        <div className={s.searchWrap}>
            <input className={s.search} type="text" placeholder="Search for anything…" search={props.search} />
        </div>
    );
}

export default Search;