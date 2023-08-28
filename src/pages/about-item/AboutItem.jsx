import styles from "../../styles/AboutItem.module.css";
import {
  SignOut,
  ShoppingCart,
  Heart,
  ShootingStar,
  ChatTeardrop,
  BookmarkSimple,
} from "@phosphor-icons/react";

const AboutItem = () => {
  return (
    <div className={styles.container}>
      <Info />
      <div className={styles.card}></div>
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <Icontray />
      <div className={styles.about}>
        <span className={styles.top}>About </span>
        <span className={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo sconsequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo sconsequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo sconsequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </span>
      </div>
      <div className={styles.comments}></div>
    </div>
  );
};

const Icontray = () => {
  return (
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
  );
};

const Card = ({ type, title, image, price, stars, comments, isBlog, shop }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          #fff 0%,
          #fff 15.42%,
          rgba(255, 255, 255, 0) 80%
        ),url(${image})`,
      }}
    ></div>
  );
};

export default AboutItem;
