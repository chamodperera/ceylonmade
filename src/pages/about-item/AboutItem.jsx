import styles from "../../styles/AboutItem.module.css";
import Card from "../../components/Card.jsx";

import {
  SignOut,
  ShoppingCart,
  Heart,
  ShootingStar,
  ChatTeardrop,
  BookmarkSimple,
  CaretRight,
} from "@phosphor-icons/react";

const AboutItem = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Info />
        <CustomCard />
      </div>
      <AboutShop />
      <MoreItems />
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
          <SignOut
            size={30}
            color="#006b6c"
            weight="duotone"
            className={styles.rotated}
          />
          Share
        </span>
        <span className={styles.icon}>
          <ShoppingCart size={30} color="#006b6c" weight="duotone" />
          Add to cart
        </span>
      </div>
      <span className={styles.icon}>
        <Heart size={30} color="#006b6c" weight="duotone" />
        Like
      </span>
    </div>
  );
};

const CustomCard = ({
  type,
  title,
  image,
  price,
  stars,
  comments,
  isBlog,
  shop,
}) => {
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

const AboutShop = ({ shop, shopProPic }) => {
  return (
    <div className={styles.aboutShopContainer}>
      <div className={styles.shopHeader}>
        <p style={{ fontSize: "1.3em" }}>About Shop</p>
        <span>
          {/* {shopProPic}
          {shop} */}
          {/* Replace the below tags with above tags when backend is done  */}
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="shop profile"
          />
          <p>Shop Name</p>
        </span>
      </div>
      <div>
        <p style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo sconsequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p style={styles.para}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo sconsequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={styles.related}>
        {/* Need to add cards that are related to the above mentioned shop  */}
      </div>

      <div id="map">{/* Show locations of the shops */}</div>
    </div>
  );
};

const MoreItems = (shop) => {
  return (
    <div className={styles.moreItemsBG}>
      <div className={styles.mHeader}>
        <span style={{ fontSize: "1.3em" }}>More From Shop</span>
        <span
          style={{ display: "flex", alignItems: "center", color: "#006b6c" }}
        >
          <CaretRight size={32} color="#006b6c" weight="duotone" />
          View all products
        </span>
      </div>
      <div className={styles.mContainer}>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
        <div>Card 5</div>
      </div>
    </div>
  );
};
export default AboutItem;
