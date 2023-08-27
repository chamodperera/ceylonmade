import styles from "../styles/AboutItem.module.css";
import { SignOut, ShoppingCart, Heart } from "@phosphor-icons/react";

const AboutItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icontray}>
          <div className={styles.left}>
            <span className={styles.icon}>
              <SignOut size={30} weight="duotone" className={styles.rotated} />
              Sign Out
            </span>
            <span className={styles.icon}>
              <ShoppingCart size={30} weight="duotone" />
              Add to cart
            </span>
          </div>
          <span className={styles.icon}>
            <Heart size={30} weight="duotone" />
            Like
          </span>
        </div>
        <div className={styles.about}>
          <span className={styles.top}>About </span>
          <span className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo sconsequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo sconsequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            sconsequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </span>
        </div>
        <div className={styles.comments}></div>
      </div>
      <div className={styles.card}>
        <img
          src="https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=1024x1024&w=is&k=20&c=Bl76ozdl6daX-fQQf5SrmBGxOe9kHDusUIyvE4Y_qeI="
          alt="example"
        />
      </div>
    </div>
  );
};

export default AboutItem;
