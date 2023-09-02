import styles from "../styles/Search.module.css";

const Search = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.heading}>Search</div>

      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input type="text"></input>
        </div>
        <div className={styles.filters}>
          <button> + Add filters</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
