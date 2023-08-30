import styles from "../styles/BuyerProfile.module.css";
import {
  SignOut,
  Package,
  Heart,
  BookmarksSimple,
  User,
  Eye,
} from "@phosphor-icons/react";

const BuyerProfile = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.topContainer}>
        <div className={styles.profileTag}>
          <div className={styles.profileImage}>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Buyer_profile_pic"
            />
          </div>
          <div className={styles.profileInfo}>
            <span style={{ fontSize: "2em", lineHeight: "1em" }}>
              Customer's Name
            </span>
            <span>Buyer</span>
            <div className={styles.buttonSet1}>
              <button>
                <SignOut size={24} color="#ffffff" weight="duotone" />
                Sign Out
              </button>
              <span style={{ margin: "0em 0.7em" }}>
                Do you want to sell? <a href="">Create a seller profile</a>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.iconList}>
          <span>
            <Package size={32} weight="duotone" />
            Orders
          </span>
          <span>
            <Heart size={32} weight="duotone" />
            Wish List
          </span>
          <span>
            <BookmarksSimple size={32} weight="duotone" />
            Saved
          </span>
          <span>
            <User size={32} weight="duotone" />
            Following
          </span>
          <span>
            <Eye size={32} weight="duotone" />
            Viewed
          </span>
        </div>
      </div>
      <div className={styles.recentItems}></div>
      <div className={styles.moreItems}></div>
    </div>
  );
};

export default BuyerProfile;
