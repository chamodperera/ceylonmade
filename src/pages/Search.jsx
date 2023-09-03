import styles from "../styles/Search.module.css";
import { CaretCircleRight, MagnifyingGlass } from "@phosphor-icons/react";

const Search = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.heading}>Search</div>

      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="   Search By..."></input>
          <div className={styles.icons}>
            <span>
              <MagnifyingGlass
                size={36}
                color="#676767"
                className={styles.searchIcon}
              />
            </span>
            <span>
              <CaretCircleRight
                size={40}
                color="#676767"
                className={styles.enterIcon}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
