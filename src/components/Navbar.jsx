import styles from "../styles/Navbar.module.css";
import {
  GridFour,
  MagnifyingGlass,
  ShoppingCart,
  Notebook,
  User,
  Gear,
} from "@phosphor-icons/react";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}></div>
      <div className={styles.links}>
        <span>
          <GridFour size={30} color="#006b6c" weight="duotone" />
        </span>
        <span>
          <MagnifyingGlass size={30} color="#006b6c" weight="duotone" />
        </span>
        <span>
          <ShoppingCart size={30} color="#006b6c" weight="duotone" />
        </span>
        <span>
          <Notebook size={30} color="#006b6c" weight="duotone" />
        </span>
        <span>
          <User size={30} color="#006b6c" weight="duotone" />
        </span>
        <span>
          <Gear size={30} color="#006b6c" weight="duotone" />
        </span>
      </div>
      <div className={styles.profile}></div>
    </div>
  );
};

export default Navbar;
