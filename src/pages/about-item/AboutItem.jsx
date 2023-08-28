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
      <Card />
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
      <div className={styles.comments}>
        <p>Comments</p>
        <div className={styles.section}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
            alt="user pic"
          />
          <input
            type="text"
            placeholder="Add a comment"
            className={styles.comBox}
          ></input>
        </div>
      </div>
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
    <div>
      <div
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(
          0deg,
          #fff 0%,
          #fff 15.42%,
          rgba(255, 255, 255, 0) 80%
        ),url(${"https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"})`,
        }}
      >
        <div className={styles.infoContainerItem}>
          <div>Color Pots (Floral Pattern)</div>
          <div className={styles.info1}>
            <span className={styles.icons1}>
              <ShootingStar size={28} color="#006b6c" weight="duotone" />
              <span>{stars}</span>
            </span>
            <span className={styles.icons1}>
              <ChatTeardrop size={28} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span className={styles.icons1}>
              <BookmarkSimple size={28} color="#006b6c" weight="duotone" />
            </span>
            {isBlog && <span className={styles.blog}>Blog attached</span>}
          </div>
        </div>
      </div>
      <div className={styles.shopTag}>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Profile pic"
        />
        <span>{shop}</span>
      </div>
    </div>
  );
};

export default AboutItem;
