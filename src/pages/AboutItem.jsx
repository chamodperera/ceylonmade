import styles from "../styles/AboutItem.module.css";
import { SignOut, ShoppingCart, Heart } from "@phosphor-icons/react";

const AboutItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icons}>
          <span>
            <SignOut size={32} weight="duotone" className={styles.rotated} />
            Sign Out
          </span>
          <span>
            <ShoppingCart size={32} weight="duotone" />
            Add to cart
          </span>
        </div>
        <span>
          <Heart size={32} weight="duotone" />
          Like
        </span>
      </div>
      <div className={styles.card}>blah blah</div>
    </div>
  );
};

export default AboutItem;
