import styles from "../styles/Sidebar.module.css";
import {
  GridFour,
  MagnifyingGlass,
  ShoppingCart,
  Notebook,
  User,
  Gear,
  SignOut,
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
      <div className={styles.profile}>
        <img
          src="data:image/jpeg;base64,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"
          alt="profile_pic"
        />
        <span>
          <p>Akith</p>
          <button>
            <SignOut size={16} />
            Sign Out
          </button>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
