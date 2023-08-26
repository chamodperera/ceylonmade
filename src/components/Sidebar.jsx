import styles from "../styles/Sidebar.module.css";
import {
  GridFour,
  MagnifyingGlass,
  ShoppingCart,
  Notebook,
  User,
  Gear,
} from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}></div>
      <div className={styles.links}>
        <span>
          <GridFour size={30} color="#006b6c" weight="duotone" />
          <p>Feed</p>
        </span>
        <span>
          <MagnifyingGlass size={30} color="#006b6c" weight="duotone" />
          <p>Search</p>
        </span>
        <span>
          <ShoppingCart size={30} color="#006b6c" weight="duotone" />
          <p>Cart</p>
        </span>
        <span>
          <Notebook size={30} color="#006b6c" weight="duotone" />
          <p>Blogs</p>
        </span>
        <span>
          <User size={30} color="#006b6c" weight="duotone" />
          <p>Profile</p>
        </span>
        <span>
          <Gear size={30} color="#006b6c" weight="duotone" />
          <p>Settings</p>
        </span>
      </div>
      <div className={styles.profile}></div>
    </div>
  );
};

export default Sidebar;
